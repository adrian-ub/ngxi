import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandMailgunIcon],svg[tabler-brand-mailgun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="tablerBrandMailgun0" d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 12a2 2 0 1 0 4 0a9 9 0 1 0-2.987 6.697"></svg:path><svg:path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0"></svg:path><svg:use href="#tablerBrandMailgun0"></svg:use><svg:use href="#tablerBrandMailgun0"></svg:use></svg:g>`,
})
export class TablerBrandMailgunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
