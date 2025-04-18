import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSearchPlusOutlineIcon],svg[bubbles-search-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.156 7.358A6.797 6.797 0 1 1 .562 7.36a6.797 6.797 0 0 1 13.594-.002"></svg:path><svg:path fill="currentColor" d="M3.938 7.312h6.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.938 7.312h6.75m-3.375 3.375v-6.75m4.853 8.227l5.271 5.273"></svg:path></svg:g>`,
})
export class BubblesSearchPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
