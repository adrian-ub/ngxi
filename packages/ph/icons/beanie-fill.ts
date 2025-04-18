import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBeanieFillIcon],svg[ph-beanie-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 162.16V144a96.18 96.18 0 0 0-72.34-93a28 28 0 1 0-47.32 0A96.18 96.18 0 0 0 32 144v18.16A16 16 0 0 0 24 176v32a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-32a16 16 0 0 0-8-13.84M120 176v32H80v-32Zm16 0h40v32h-40ZM116 36a12 12 0 1 1 12 12a12 12 0 0 1-12-12M40 176h24v32H40Zm176 32h-24v-32h24z"></svg:path>`,
})
export class PhBeanieFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
