import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightIcon],svg[material-symbols-flight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22v-2.5l3-2.1v-3.6L2 17v-3l8-5.6V4q0-.825.588-1.412T12 2t1.413.588T14 4v4.4l8 5.6v3l-8-3.2v3.6l3 2.1V22l-5-1.5z"></svg:path>`,
})
export class MaterialSymbolsFlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
