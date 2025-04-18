import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextBLightIcon],svg[ph-text-b-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174.69 116.41A42 42 0 0 0 148 42H80a6 6 0 0 0-6 6v152a6 6 0 0 0 6 6h80a46 46 0 0 0 14.69-89.59M86 54h62a30 30 0 0 1 0 60H86Zm74 140H86v-68h74a34 34 0 0 1 0 68"></svg:path>`,
})
export class PhTextBLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
