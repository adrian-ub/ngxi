import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignForestFilledIcon],svg[tdesign-forest-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 .214l5.001 13l5-13L23.457 17h-5.456v5h-2v-5h-8v5h-2v-5H.545z"></svg:path>`,
})
export class TdesignForestFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
