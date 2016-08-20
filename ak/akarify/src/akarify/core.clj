(ns akarify.core
  (:require [clojure.string :as str]))


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(defn choose-a-word []
  (rand-nth (dict/kamus)))

(use 'akarify.dict)

(count kamus)

;; Program performs word segmentation on 120 of the most commonly used affixed words in Bahasa Malaysia.

(def prefix ["men" "me" "mem" "meng" "meny" "ber" "be" "di" "ter"])

(def suffix ["kan" "i" ])

;; Auxilary functions

; has-prefix? : string -> boolean
; determines if word contains possible prefix


(defn has-prefix? [word]
  (some #(.startsWith word %) prefix))


; has-suffix? : string -> boolean
; determines if word contains possible suffix


(defn has-suffix? [word]
  (some #(.endsWith word %) suffix))


; contains-affix? : string -> boolean
; determines if word contains possible affix(es)

(defn contains-affix? [word]
  (if (or (has-suffix? word ) (has-prefix? word))
    true
    false))

; rsv-word? :string -> boolean
; determines if word is reserved word
; a word containing affix letters but is itself a root word








;;Main function

;get-root
