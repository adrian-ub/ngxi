import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextOutdentFillIcon],svg[ph-text-outdent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M72 144a8 8 0 0 0 8-8V56a8 8 0 0 0-13.66-5.66l-40 40a8 8 0 0 0 0 11.32l40 40A8 8 0 0 0 72 144"></svg:path>`,
})
export class PhTextOutdentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
