import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAppStoreSolidIcon],svg[streamline-app-store-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.853 1.298a1.054 1.054 0 0 0-1.44.383l-.268.46l-.267-.46a1.054 1.054 0 1 0-1.825 1.058l.873 1.505l-2.778 4.79h-1.84a1.054 1.054 0 0 0 0 2.108h7.32l-1.22-2.108H5.586l1.559-2.689L9.236 2.74a1.054 1.054 0 0 0-.383-1.441ZM1.738 13.647a1.08 1.08 0 0 0 1.474-.397l.594-1.03h-2.49a1.08 1.08 0 0 0 .422 1.427m9.351-.397L7.751 7.452l1.243-2.138l2.159 3.72h1.669a1.054 1.054 0 1 1 0 2.11h-.455l.593 1.029a1.08 1.08 0 1 1-1.87 1.077Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAppStoreSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
