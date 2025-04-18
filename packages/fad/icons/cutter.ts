import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadCutterIcon],svg[fad-cutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M70.526 8.975L215.553 155l-90.48 89.973L68.86 187.58zM85.246 47l1.018 134.104L125.74 223l55.346-55.78l-54.06-54.22l11.872-12.917z"></svg:path>`,
})
export class FadCutterIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
