import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHonistaIcon],svg[arcticons-honista-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.2 20.115H8.4L4.5 26.87l3.9 6.755h7.8l3.9-6.755z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.9 26.87h-7.8l-3.9 6.755l3.9 6.755h7.8l3.9-6.755zm11.7-6.755h-7.8l-3.9 6.755l3.9 6.755h7.8l3.9-6.755zM27.9 13.36h-7.8l-3.9 6.755l3.9 6.755h7.8l3.9-6.755zm-7.8 0l-1.95-3.377h-2.212M27.9 13.36l1.95-3.377h2.212"></svg:path><svg:circle cx="39.06" cy="9.983" r="2.363" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsHonistaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
