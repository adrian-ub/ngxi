import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFrostyIcon],svg[picon-frosty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h4v2H2M0 2h8v1H0m4 4L3 5l1-1l1 1M1 3C0 9 8 9 7 3M2 3h1v1H2m3-1h1v1H5"></svg:path>`,
})
export class PiconFrostyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
