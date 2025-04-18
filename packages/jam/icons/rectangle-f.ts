import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamRectangleFIcon],svg[jam-rectangle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 .565h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamRectangleFIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
