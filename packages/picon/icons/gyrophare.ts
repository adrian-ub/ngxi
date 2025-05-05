import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGyrophareIcon],svg[picon-gyrophare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h8v1M5 5V3L4 2v4M1 6l1-4h4l1 4"></svg:path>`,
})
export class PiconGyrophareIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
