import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBuildingBlockFilledIcon],svg[ix-building-block-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.667 426.667l.707-235.011h425.959l-.707 235.011zm42.666-256V85.333h128v85.334zm213.617-.275V85.333h127.787v85.059z" clip-rule="evenodd"></svg:path>`,
})
export class IxBuildingBlockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
