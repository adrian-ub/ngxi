import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLandroidIcon],svg[arcticons-landroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.2 18.4h21.5v17.1l-1.8 1.8H15l-1.8-1.8Zm0-2c0-12.8 21.5-12.7 21.5 0Zm20.1 0v2m-18.2 0v-2"></svg:path><svg:circle cx="19" cy="12.4" r=".8" fill="currentColor"></svg:circle><svg:circle cx="29" cy="12.4" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35 43.5h-5.6v-6.2m-10.9 0v6.2H13M29 7.8l1.5-3.3m-13.1 0l1.5 3.3m-3.6 12.7v10.3h3.4v1.8h1.7V35h7.2v-2.4h1.7v-1.8h3.4V20.4Zm2.3 2.2v2m1.9-2v2m1.8-2v2m1.8-2v2m1.8-2v2m1.8-2v2m1.9-2v2m1.8-2v2m-20 6.1a.79.79 0 0 1-.8-.8V20a.79.79 0 0 1 .8-.8h0a.79.79 0 0 1 .8.8v10c.1.4-.3.8-.8.8m27.2 0a.79.79 0 0 1-.8-.8V20a.79.79 0 0 1 .8-.8h0a.79.79 0 0 1 .8.8v10a.86.86 0 0 1-.8.8M18.5 43.5h10.9"></svg:path>`,
})
export class ArcticonsLandroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
