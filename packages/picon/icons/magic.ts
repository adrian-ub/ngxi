import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMagicIcon],svg[picon-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v.5h1v-1M0 3V2l8-2v1M2 8V5L1 4h6L6 5v3"></svg:path>`,
})
export class PiconMagicIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
