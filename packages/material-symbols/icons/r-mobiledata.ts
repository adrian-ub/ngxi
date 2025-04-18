import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRMobiledataIcon],svg[material-symbols-r-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10V2h5q.825 0 1.413.588T9 4v1.35q0 .6-.35 1.088T7.8 7.2L9 10H7L5.85 7.35H4V10zm2-4.65h3V4H4z"></svg:path>`,
})
export class MaterialSymbolsRMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
