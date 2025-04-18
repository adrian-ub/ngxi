import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWaterdropsBrokenIcon],svg[solar-waterdrops-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833Zm12 0C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z"></svg:path><svg:path stroke-linecap="round" d="M13.262 3.235a1.724 1.724 0 0 0-2.524 0C9.566 4.472 8 6.393 8 7.833C8 10.134 9.79 12 12 12s4-1.866 4-4.167A2.7 2.7 0 0 0 15.854 7"></svg:path></svg:g>`,
})
export class SolarWaterdropsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
