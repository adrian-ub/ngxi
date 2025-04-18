import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHomeIcon],svg[ix-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l192 153.6V448H277.333V341.333h-42.666V448H64V217.6zm0 53.333L106.667 234.667v170.666H192V298.667h128v106.666h85.333V234.667z"></svg:path>`,
})
export class IxHomeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
