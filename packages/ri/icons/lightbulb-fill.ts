import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLightbulbFillIcon],svg[ri-lightbulb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18H7.941c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H13v-5h-2zm5 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1z"></svg:path>`,
})
export class RiLightbulbFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
