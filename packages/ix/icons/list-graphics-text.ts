import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixListGraphicsTextIcon],svg[ix-list-graphics-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 341.336v85.333h-192v-85.333zm234.666 21.333v42.667h-192v-42.667zM234.667 213.336v85.333h-192v-85.333zm234.666 21.333v42.667h-192v-42.667zM234.667 85.336v85.333h-192V85.336zm234.666 21.333v42.667h-192v-42.667z"></svg:path>`,
})
export class IxListGraphicsTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
