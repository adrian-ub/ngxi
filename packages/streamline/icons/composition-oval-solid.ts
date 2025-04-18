import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCompositionOvalSolidIcon],svg[streamline-composition-oval-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.32 2.391A13.8 13.8 0 0 0 7 1.5a13.8 13.8 0 0 0-5.32.891a1.42 1.42 0 0 0-.798.76A10.8 10.8 0 0 0 0 7.022a10.8 10.8 0 0 0 .882 3.827c.153.353.442.625.797.76A13.8 13.8 0 0 0 7 12.5a13.8 13.8 0 0 0 5.32-.891c.356-.135.645-.407.798-.76a10.8 10.8 0 0 0 .881-3.871a10.8 10.8 0 0 0-.881-3.827a1.42 1.42 0 0 0-.797-.76Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCompositionOvalSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
