import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMeasureFilledIcon],svg[lsicon-measure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.121 2.343a1 1 0 0 1 1.415 0l2.12 2.121a1 1 0 0 1 0 1.415L5.88 13.657a1 1 0 0 1-1.414 0l-2.122-2.121a1 1 0 0 1 0-1.415zm-5.785 7.2L3.05 10.828l2.122 2.122l7.778-7.778l-2.121-2.122l-1.286 1.286L10.707 5.5L10 6.207L8.836 5.043l-.793.793L9.207 7l-.707.707l-1.164-1.164l-.793.793L7.707 8.5L7 9.207L5.836 8.043l-.793.793L6.207 10l-.707.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMeasureFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
