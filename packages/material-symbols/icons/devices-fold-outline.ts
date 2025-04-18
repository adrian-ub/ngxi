import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesFoldOutlineIcon],svg[material-symbols-devices-fold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-.825 0-1.412-.587T10 19V4.275q0-.6.325-1.088t.875-.737l3-1.3q1-.425 1.9.163T17 3h3q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm0-3.025l3-1.3V3l-3 1.3zM14.675 19H20V5h-3v11.675q0 .6-.325 1.113t-.875.737zM2 5V3h2v2zm0 16v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4-4V3h2v2zm0 16v-2h2v2zm6-3.025V4.3z"></svg:path>`,
})
export class MaterialSymbolsDevicesFoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
