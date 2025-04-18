import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTechnoratiIcon],svg[whh-technorati-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M706 564q-105 0-193.5-34.5t-140-93.5T321 307.5t51.5-129t140-93.5T706 51q28 0 61 3q108 62 176.5 166.5T1024 452q-53 51-137 81.5T706 564M192 307q0 105 69 193t185 139l-61 182l321-129q170 0 307-77q-40 173-179.5 285.5T513 1013q-104 0-199-40.5T150 863T40.5 699T0 500q0-181 112.5-320.5T397 0q-95 54-150 134.5T192 307"></svg:path>`,
})
export class WhhTechnoratiIcon {
  readonly viewBox = input("0 0 1024 1013")
  readonly width = input("1.02em")
  readonly height = input("1em")
}
