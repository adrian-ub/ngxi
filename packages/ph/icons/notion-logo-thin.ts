import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotionLogoThinIcon],svg[ph-notion-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44h-48a4 4 0 0 0 0 8h20v140.43L107.5 46.07A4 4 0 0 0 104 44H40a4 4 0 0 0 0 8h20v152H40a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8H68V63.57l80.5 146.36A4 4 0 0 0 152 212h40a4 4 0 0 0 4-4V52h20a4 4 0 0 0 0-8M70.77 52h30.86l83.6 152h-30.86Z"></svg:path>`,
})
export class PhNotionLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
