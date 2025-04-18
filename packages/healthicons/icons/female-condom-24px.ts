import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsFemaleCondom24pxIcon],svg[healthicons-female-condom-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 9.874A4.002 4.002 0 0 0 18 2a4 4 0 0 0-1 7.874V11h-1.5v2H17v1.5h2V13h1.5v-2H19zM18 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7.5 4.5a1.5 1.5 0 1 1 3 0v.79A4 4 0 0 1 13 9v9h.5a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3H5V9a4 4 0 0 1 2.5-3.71zM11 18V9a2 2 0 1 0-4 0v9z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsFemaleCondom24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
