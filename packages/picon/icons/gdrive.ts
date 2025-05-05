import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGdriveIcon],svg[picon-gdrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3L1 7L0 5l2-4m5 4L6 7H2l1-2m0-5h2l2 4H5"></svg:path>`,
})
export class PiconGdriveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
