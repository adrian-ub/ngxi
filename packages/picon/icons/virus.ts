import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVirusIcon],svg[picon-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2V0l2 2M2 2H0l2-2m0 8L0 6h2C0 3 3 0 6 2c2 3-1 6-4 4m3 0l1 2H4m2-4l2-1v2M5 5l1-1l-1-1l-1 1"></svg:path>`,
})
export class PiconVirusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
