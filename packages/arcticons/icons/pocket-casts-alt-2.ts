import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPocketCastsAlt2Icon],svg[arcticons-pocket-casts-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.203 8.797c8.396 8.397 8.396 22.01 0 30.406s-22.01 8.396-30.406 0s-8.396-22.01 0-30.406"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.192 14.808c5.077 5.076 5.077 13.308 0 18.384s-13.308 5.077-18.384 0s-5.077-13.308 0-18.384m4.409-9.692C18.7 4.098 17.59 3.589 16.51 3.763c-.776.77-1.017 1.968-.499 2.986"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.702 12.573c1.436 1.023 1.335 3.394-1.113 3.394c-2.043 0-2.468-1.183-2.589-1.785c-.121.602-.546 1.785-2.59 1.785c-2.447 0-2.548-2.371-1.112-3.394m4.607-1.811l-.905.637l-.905-.637"></svg:path><svg:circle cx="26.692" cy="8.572" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.308" cy="8.572" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.783 5.116c.518-1.018 1.628-1.527 2.708-1.353c.776.77 1.017 1.968.499 2.986"></svg:path>`,
})
export class ArcticonsPocketCastsAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
