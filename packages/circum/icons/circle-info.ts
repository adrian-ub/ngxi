import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCircleInfoIcon],svg[circum-circle-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 15a.5.5 0 0 0 1 0v-4.019a.5.5 0 0 0-1 0Z"></svg:path><svg:circle cx="12" cy="8.999" r=".5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 2.065A9.934 9.934 0 1 1 2.066 12A9.945 9.945 0 0 1 12 2.065m0 18.867A8.934 8.934 0 1 0 3.066 12A8.944 8.944 0 0 0 12 20.932"></svg:path>`,
})
export class CircumCircleInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
