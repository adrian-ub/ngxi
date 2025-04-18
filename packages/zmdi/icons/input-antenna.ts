import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiInputAntennaIcon],svg[zmdi-input-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 91q62 0 105.5 43.5T384 240h-43q0-44-31-75.5T235 133t-75.5 31.5T128 240H85q0-62 44-105.5T235 91m21 198v70l73 73l-30 30l-64-64l-64 64l-30-30l72-73v-70q-14-6-23-19.5t-9-29.5q0-22 16-37.5t38-15.5t37.5 15.5T288 240q0 35-32 49M235 5q97 0 165.5 69T469 240h-42q0-80-56.5-136t-136-56T99 104T43 240H0q0-97 69-166T235 5"></svg:path>`,
})
export class ZmdiInputAntennaIcon {
  readonly viewBox = input("0 0 472 464")
  readonly width = input("1.02em")
  readonly height = input("1em")
}
