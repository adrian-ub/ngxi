import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiEmergencyPhone11Icon],svg[maki-emergency-phone-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.87 8.53a.73.73 0 0 0 0-1l-.74-.74a.73.73 0 0 0-1 0zm-4.6-4.56a.73.73 0 0 0 0-1l-.71-.71a.73.73 0 0 0-1 0zM3.04 5.65l2.31 2.31a.37.37 0 0 0 .52 0l.44-.43l1.76 1.74a2.27 2.27 0 0 1-1.34.73h-1a1.345 1.345 0 0 1-1-.52L1.52 6.27a1.345 1.345 0 0 1-.52-1v-1a2.27 2.27 0 0 1 .73-1.34l1.74 1.76l-.43.44a.37.37 0 0 0 0 .52M8 2.5H6.5v1H8V5h1V3.5h1.5v-1H9V1H8z" fill="currentColor"></svg:path>`,
})
export class MakiEmergencyPhone11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
