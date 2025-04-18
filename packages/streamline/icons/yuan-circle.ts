import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineYuanCircleIcon],svg[streamline-yuan-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5 4l2.08 2.77L9.15 4M7.08 6.77V10m-1.62-.69h3.23M5.46 7.5h3.23"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path></svg:g>`,
})
export class StreamlineYuanCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
