import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRearCameraIcon],svg[material-symbols-rear-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 8q.425 0 .713-.288T17.5 7t-.288-.712T16.5 6t-.712.288T15.5 7t.288.713T16.5 8M13 19h7V5h-7zm-9 2q-.825 0-1.412-.587T2 19v-6h4.2l-1.6 1.6L6 16l4-4l-4-4l-1.4 1.4L6.2 11H2V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21z"></svg:path>`,
})
export class MaterialSymbolsRearCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
