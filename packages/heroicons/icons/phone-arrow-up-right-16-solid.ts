import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsPhoneArrowUpRight16SolidIcon],svg[heroicons-phone-arrow-up-right-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m4.922 6.752l-1.067.534a7.52 7.52 0 0 0 4.859 4.86l.534-1.068a1 1 0 0 1 1.046-.542l2.858.44a1 1 0 0 1 .848.988V13a1 1 0 0 1-1 1h-2c-.709 0-1.4-.082-2.062-.238a9.01 9.01 0 0 1-6.7-6.7A9 9 0 0 1 2 5V3a1 1 0 0 1 1-1h1.036a1 1 0 0 1 .988.848l.44 2.858a1 1 0 0 1-.542 1.046"></svg:path><svg:path d="M9.22 5.72a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69z"></svg:path></svg:g>`,
})
export class HeroiconsPhoneArrowUpRight16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
