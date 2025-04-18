import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconFramermotionIcon],svg[devicon-framermotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22.684 0h84.253v42.667H64.81zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333z"></svg:path>`,
})
export class DeviconFramermotionIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
