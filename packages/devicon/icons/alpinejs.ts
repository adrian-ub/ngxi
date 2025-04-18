import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconAlpinejsIcon],svg[devicon-alpinejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#77c1d2" fill-rule="evenodd" d="M98.444 35.562L126 62.997L98.444 90.432L70.889 62.997z" clip-rule="evenodd"></svg:path><svg:path fill="#2d3441" fill-rule="evenodd" d="m29.556 35.562l57.126 56.876H31.571L2 62.997z" clip-rule="evenodd"></svg:path>`,
})
export class DeviconAlpinejsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
