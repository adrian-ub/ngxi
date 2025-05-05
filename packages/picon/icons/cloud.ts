import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCloudIcon],svg[picon-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5C0 5-1 2 2 2c0-3 4-2 4-1c3 1 2 4 0 4"></svg:path>`,
})
export class PiconCloudIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
