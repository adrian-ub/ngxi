import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAutoFlashIcon],svg[streamline-auto-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.115.59v4.115h2.88l-4.526 6.583V7.173h-2.88L6.114.59Zm1.911 12.656l1.842-5.525a.69.69 0 0 1 .658-.475v0c.299 0 .564.191.658.475l1.842 5.525m-4.333-2h3.666"></svg:path>`,
})
export class StreamlineAutoFlashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
