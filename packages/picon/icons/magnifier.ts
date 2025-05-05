import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMagnifierIcon],svg[picon-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5C2 7-1.5 4 1 1c3-2.5 6 1 4 3l3 3l-1 1M1.5 1.5C0 3 2 6 4 4S3 0 1.5 1.5"></svg:path>`,
})
export class PiconMagnifierIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
