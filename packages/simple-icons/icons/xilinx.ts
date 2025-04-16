import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsXilinxIcon],svg[simple-icons-xilinx-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 18l5.241 6H5.586L.345 18l5.241-6L.345 6l5.241-6h7.655L8 6l5.241 6L8 18zM23.655 0H13.241l5.241 6l5.173-6zM13.241 24h10.414l-5.172-6l-5.242 6z"></svg:path>`,
})
export class SimpleIconsXilinxIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
