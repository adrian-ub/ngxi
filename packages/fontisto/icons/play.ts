import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPlayIcon],svg[fontisto-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.001 1.165v21.669a1.275 1.275 0 0 0 1.891 1.017l-.006.003l21.442-10.8a1.172 1.172 0 0 0 .007-2.113l-.007-.003L1.886.138A1.273 1.273 0 0 0 .003 1.162v.004z"></svg:path>`,
})
export class FontistoPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
