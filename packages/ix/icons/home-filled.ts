import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHomeFilledIcon],svg[ix-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64L64 217.6V448h149.333V320h85.334v128H448V217.6z"></svg:path>`,
})
export class IxHomeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
