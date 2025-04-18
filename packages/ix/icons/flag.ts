import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFlagIcon],svg[ix-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m405.333 85.333l-64 85.333l64 85.334l-234.667-.001v170.667H128V85.333zM320 128H170.667v85.333H320l-32-42.667z"></svg:path>`,
})
export class IxFlagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
