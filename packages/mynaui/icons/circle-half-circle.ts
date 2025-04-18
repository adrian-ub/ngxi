import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleHalfCircleIcon],svg[mynaui-circle-half-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="mynauiCircleHalfCircle0" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:use href="#mynauiCircleHalfCircle0"></svg:use><svg:use href="#mynauiCircleHalfCircle0"></svg:use><svg:path d="M12 17a5 5 0 0 0 0-10z"></svg:path></svg:g>`,
})
export class MynauiCircleHalfCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
