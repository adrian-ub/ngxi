import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFemaleIcon],svg[picon-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8C-1 8-1 3 2.5 3s3.5 5 0 5M1 5.5c0 2 3 2 3 0s-3-2-3 0M3 4l4-4l1 1l-4 4m0-5l4 4l-1 1l-4-4"></svg:path>`,
})
export class PiconFemaleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
