import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentDuotoneIcon],svg[ph-text-outdent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H40V88l24-24Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 5.66-13.66L43.31 96l34.35-34.34a8 8 0 0 0-11.32-11.32l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144"></svg:path></svg:g>`,
})
export class PhTextOutdentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
