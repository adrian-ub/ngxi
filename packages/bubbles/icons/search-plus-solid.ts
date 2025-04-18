import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSearchPlusSolidIcon],svg[bubbles-search-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.798 1.5a6.297 6.297 0 1 0-.001 12.594A6.297 6.297 0 0 0 7.798 1.5m5.501 11.09a7.3 7.3 0 0 0 1.796-4.794a7.297 7.297 0 1 0-2.503 5.502l4.93 4.93a.5.5 0 1 0 .707-.707zM7.751 3.876a.5.5 0 0 1 .5.5V7.25h2.875a.5.5 0 0 1 0 1H8.25v2.875a.5.5 0 0 1-1 0V8.25H4.376a.5.5 0 0 1 0-1H7.25V4.375a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path>`,
})
export class BubblesSearchPlusSolidIcon {
  readonly viewBox = input("0 0 19 19")
  readonly width = input("1em")
  readonly height = input("1em")
}
