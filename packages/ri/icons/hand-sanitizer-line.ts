import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHandSanitizerLineIcon],svg[ri-hand-sanitizer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2v2l-4-.001V6h3v2a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a4 4 0 0 1 4-4V6h3V3.999L7.5 4c-.63 0-1.37.49-2.2 1.6L3.7 4.4C4.87 2.84 6.13 2 7.5 2zm-1 8H8a2 2 0 0 0-2 2v8h12v-8a2 2 0 0 0-2-2m-3 2v2h2v2h-2v2h-2v-2H9v-2h2v-2z"></svg:path>`,
})
export class RiHandSanitizerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
