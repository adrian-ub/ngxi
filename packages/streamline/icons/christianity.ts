import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianityIcon],svg[streamline-christianity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 4s-3.67 6-8 6a5.6 5.6 0 0 1-5-3a5.6 5.6 0 0 1 5-3c4.33 0 8 6 8 6"></svg:path>`,
})
export class StreamlineChristianityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
