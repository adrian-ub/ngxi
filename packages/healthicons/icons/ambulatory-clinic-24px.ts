import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAmbulatoryClinic24pxIcon],svg[healthicons-ambulatory-clinic-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.989 4c-.74-.624-1.696-1-2.739-1s-2 .376-2.739 1H2l1 4v10a1 1 0 1 0 0 2h9v-8h5v8h4a1 1 0 1 0 0-2V8l1-4zM10 5H8.5v1.5H7V8h1.5v1.5H10V8h1.5V6.5H10z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAmbulatoryClinic24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
