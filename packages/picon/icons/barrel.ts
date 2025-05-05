import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBarrelIcon],svg[picon-barrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7V1h4v6M1 1V.5h6V1M1 7v-.5h6V7M1.5 4v-.5h5V4"></svg:path>`,
})
export class PiconBarrelIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
