import tkinter

from tkinter import ttk

root = tkinter.Tk()
root.title("Pythagorean Theorem Calculator")
root.geometry("400x400")
root.rowconfigure(0,weight=3)
root.rowconfigure(1,weight=3)
root.columnconfigure(0, weight=3)
root.columnconfigure(1, weight=3)

frame = tkinter.Frame(root, bg="#257d44")
frame.pack(expand=True,fill="both")

dropDown = ttk.Combobox(frame)
dropDown.option_add("Solve leg 'a'","a")
dropDown.option_add("Solve leg 'b'","b")
dropDown.option_add("Solve leg 'c'","c")
dropDown.grid(column=0,row =0)





sideOne = ttk.Entry(frame)
sideOne.grid(column=0,row=1)

sideTwo = ttk.Entry(frame)
sideTwo.grid(column=1,row=1)




























































root.mainloop()

