import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMinusInCircleIcon],svg[oui-minus-in-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0C11.636 0 15 3.364 15 7.5S11.636 15 7.5 15S0 11.636 0 7.5S3.364 0 7.5 0m0 .882a6.618 6.618 0 1 0 0 13.236A6.618 6.618 0 0 0 7.5.882M3.5 7h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1 0-1"></svg:path>`,
})
export class OuiMinusInCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
