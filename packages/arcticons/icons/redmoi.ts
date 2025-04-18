import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRedmoiIcon],svg[arcticons-redmoi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.545 30.004V17.996h2.701A5.254 5.254 0 0 1 36.5 23.25v1.5a5.254 5.254 0 0 1-5.254 5.254zm-17.045 0V17.996h3.931c2.223 0 4.025 1.806 4.025 4.033s-1.802 4.033-4.025 4.033H11.5m3.931 0l3.931 3.939m9.127-3.139h-5.254m5.254-5.724h-5.254"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsRedmoiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
