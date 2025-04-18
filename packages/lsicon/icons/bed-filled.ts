import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBedFilledIcon],svg[lsicon-bed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V7h.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H14V14h-1v-1.5H3V14H2v-1.5h-.5A.5.5 0 0 1 1 12V7.5a.5.5 0 0 1 .5-.5H2zM3 7h1v-.5a1.5 1.5 0 1 1 3 0V7h2v-.5a1.5 1.5 0 1 1 3 0V7h1V4.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5zm7 0h1v-.5a.5.5 0 0 0-1 0zM5 7h1v-.5a.5.5 0 0 0-1 0z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBedFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
