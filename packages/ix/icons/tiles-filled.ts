import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTilesFilledIcon],svg[ix-tiles-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 64H64v170.667h170.667zM448 64H277.333v170.667H448zM64 277.333h170.667V448H64zm384 0H277.333V448H448z" clip-rule="evenodd"></svg:path>`,
})
export class IxTilesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
