import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleMoreFilledIcon],svg[lsicon-circle-more-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m3 0a.75.75 0 1 1 1.5 0A.75.75 0 0 1 4 8m3.25 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.25.005a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleMoreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
