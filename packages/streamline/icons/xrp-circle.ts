import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineXrpCircleIcon],svg[streamline-xrp-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="m4.5 4l1.79 1.79a1 1 0 0 0 1.42 0L9.5 4m-5 6l1.79-1.79a1 1 0 0 1 1.42 0L9.5 10"></svg:path></svg:g>`,
})
export class StreamlineXrpCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
