import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSubmitFilledIcon],svg[lsicon-submit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V7h-1V3H3v10h2.005v1H2.5a.5.5 0 0 1-.5-.5zm11.994 6.832l-4.52 4.519a.5.5 0 0 1-.706 0l-2.51-2.51l.706-.708l2.157 2.157l4.166-4.166z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSubmitFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
