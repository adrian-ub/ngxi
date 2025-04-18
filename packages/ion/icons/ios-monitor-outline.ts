import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosMonitorOutlineIcon],svg[ion-ios-monitor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M496 384V96H16v288h175v16h-64v16h257v-16h-64v-16h176zM32 112h448v256H32V112z" fill="currentColor"></svg:path>`,
})
export class IonIosMonitorOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
