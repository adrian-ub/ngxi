import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLightbulbFlashFillIcon],svg[ri-lightbulb-flash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1zm-3-9.995V6l-4.5 6.005H11v4l4.5-6z"></svg:path>`,
})
export class RiLightbulbFlashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
