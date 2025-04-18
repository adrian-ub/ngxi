import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiFaceNeutralIcon],svg[oui-face-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:circle cx="5" cy="5" r="1"></svg:circle><svg:circle cx="10" cy="5" r="1"></svg:circle><svg:path fill-rule="nonzero" d="M7.5 14a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 1a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15"></svg:path><svg:path fill-rule="nonzero" d="M3 10h9a.5.5 0 1 0 0-1H3a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class OuiFaceNeutralIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
