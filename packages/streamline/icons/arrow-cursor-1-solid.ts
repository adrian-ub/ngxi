import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArrowCursor1SolidIcon],svg[streamline-arrow-cursor-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.858.043A1.5 1.5 0 0 0 .043 1.858v.001l2.29 9.26l.001.002a1.5 1.5 0 0 0 2.52.69L6.5 10.166l3.646 3.646a.5.5 0 0 0 .705.003l3-2.96a.5.5 0 0 0 .002-.71L10.206 6.5l1.646-1.646l.003-.003a1.5 1.5 0 0 0-.742-2.518L1.859.044Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArrowCursor1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
