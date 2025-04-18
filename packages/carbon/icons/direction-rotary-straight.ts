import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryStraightIcon],svg[carbon-direction-rotary-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12.09V5.828l4.586 4.586L23 9l-7-7l-7 7l1.414 1.414L15 5.828v6.262a5.993 5.993 0 0 0 0 11.82V28h2v-4.09a5.993 5.993 0 0 0 0-11.82M16 22a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonDirectionRotaryStraightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
