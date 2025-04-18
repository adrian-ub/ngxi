import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRotateAngle45Icon],svg[streamline-rotate-angle-45-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 4L.5 13.5h13"></svg:path><svg:path d="M7.5 13.5a7 7 0 0 0-2.05-4.95"></svg:path></svg:g>`,
})
export class StreamlineRotateAngle45Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
