import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineThermometerIcon],svg[streamline-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9V2A1.5 1.5 0 0 0 7 .5v0A1.5 1.5 0 0 0 5.5 2v7a2.5 2.5 0 1 0 3 0"></svg:path>`,
})
export class StreamlineThermometerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
