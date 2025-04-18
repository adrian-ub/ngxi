import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPen02Icon],svg[hugeicons-pen-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 21.743a.75.75 0 0 1-.72-.96l.86-3c.12-.44.36-.86.7-1.19l13.84-13.84c.66-.66 1.81-.66 2.47 0l1.09 1.09c.68.68.68 1.79 0 2.47l-1.684 1.684c.7.733 1.075 1.266 1.075 1.996c0 .93-.61 1.54-1.72 2.65l-.88.88c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.88-.88c.77-.77 1.28-1.28 1.28-1.59c0-.212-.238-.517-.635-.935l-6.944 6.944l-.043.042l-4.108 4.109c-.34.34-.75.58-1.2.7l-2.99.86q-.105.03-.21.03m8.006-7.305l6.44-6.44l-1.44-1.44l-6.44 6.44zm-2.5-.38l1.44 1.44l-3.595 3.595c-.16.15-.34.26-.55.32l-1.7.49l.49-1.71c.06-.2.17-.39.32-.54zM20.19 5.253l-1.685 1.685l-1.44-1.44l1.685-1.685c.06-.06.17-.07.17-.07h.01c.04 0 .11.01.17.07l1.09 1.09c.1.1.1.25 0 .35" color="currentColor"></svg:path>`,
})
export class HugeiconsPen02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
