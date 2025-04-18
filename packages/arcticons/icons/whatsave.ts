import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWhatsaveIcon],svg[arcticons-whatsave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.44 25.875a21.5 21.5 0 0 1-25.152 19.298M4.578 14.915a21.5 21.5 0 0 1 40.903 7.213M16.67 44.203C6.193 40.39.37 29.203 3.255 18.436"></svg:path><svg:circle cx="24.022" cy="24" r="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.022 29.604V18.397m-3.569 7.759l3.57 3.448l3.568-3.448"></svg:path>`,
})
export class ArcticonsWhatsaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
