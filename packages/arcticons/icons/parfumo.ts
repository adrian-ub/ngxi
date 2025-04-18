import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParfumoIcon],svg[arcticons-parfumo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.287 2.823c-3.647 13.312-4.241 23.245-2.015 41.902"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.523 11.476c6.07 4 8.754 6.039 10.565 10.102m26.195-7.094c-4.996 8.992-8.281 22.26-9.133 28.473"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.026 6.896c2.485 5.569 4.249 11.614 4.249 11.614"></svg:path>`,
})
export class ArcticonsParfumoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
