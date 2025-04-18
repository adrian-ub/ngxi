import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCameraOutdoorOutlineRoundedIcon],svg[material-symbols-camera-outdoor-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18q-.425 0-.712-.288T12 17v-4q0-.425.288-.712T13 12h4q.425 0 .713.288T18 13v1l1.275-.675q.25-.125.488.025t.237.425v2.45q0 .275-.238.425t-.487.025L18 16v1q0 .425-.288.713T17 18zm-9 1v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6.4 4.8q.4.3.413.7t-.213.7t-.612.4t-.788-.2L12 5.5L6 10v9h13q.425 0 .713.288T20 20t-.288.713T19 21H6q-.825 0-1.412-.587T4 19m8-6.75"></svg:path>`,
})
export class MaterialSymbolsCameraOutdoorOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
