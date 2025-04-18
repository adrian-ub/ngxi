import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlashOffIcon],svg[zmdi-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 24l336 336l-27 27l-89-89l-76 131V237h-64v-79L0 51zm293 149l-33 57L107 49V3h213l-85 170z"></svg:path>`,
})
export class ZmdiFlashOffIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
