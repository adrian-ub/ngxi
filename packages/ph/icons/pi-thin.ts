import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPiThinIcon],svg[ph-pi-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 172a32 32 0 0 1-64 0V68H92v132a4 4 0 0 1-8 0V68H72a44.05 44.05 0 0 0-44 44a4 4 0 0 1-8 0a52.06 52.06 0 0 1 52-52h152a4 4 0 0 1 0 8h-52v104a24 24 0 0 0 48 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhPiThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
