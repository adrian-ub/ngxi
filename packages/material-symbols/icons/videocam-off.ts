import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideocamOffIcon],svg[material-symbols-videocam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 17.5l-4-4v1.675L6.825 4H16q.825 0 1.413.588T18 6v4.5l4-4zm-1.45 5.85L.65 3.45l1.4-1.4l19.9 19.9zM4 4l14 14q0 .825-.587 1.413T16 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4"></svg:path>`,
})
export class MaterialSymbolsVideocamOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
