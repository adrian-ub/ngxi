import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSuitcaseIcon],svg[ph-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm64 24v128H96V72ZM40 72h40v128H40Zm176 128h-40V72h40z"></svg:path>`,
})
export class PhSuitcaseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
