import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleStarFilledIcon],svg[lsicon-circle-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.287 5.478L8 3.87L6.713 6.478l-2.878.419l2.082 2.03l-.491 2.866L8 10.44l2.574 1.353l-.491-2.866l2.082-2.03z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleStarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
