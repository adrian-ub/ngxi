import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidParagraphAlphabetIcon],svg[icon-park-solid-paragraph-alphabet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 9h18M24 19h18M6 29h36M6 39h36"></svg:path><svg:path fill="currentColor" d="m11 9l-4 8h8z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m6 19l1-2m9 2l-1-2m-8 0l4-8l4 8m-8 0h8"></svg:path></svg:g>`,
})
export class IconParkSolidParagraphAlphabetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
