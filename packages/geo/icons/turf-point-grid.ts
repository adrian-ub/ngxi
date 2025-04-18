import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[geoTurfPointGridIcon],svg[geo-turf-point-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.528" cy="88.472" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="88.472" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="69.236" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="50" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="30.764" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="11.528" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="88.472" cy="88.472" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="88.472" cy="69.236" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="88.472" cy="50" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="88.472" cy="30.764" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="69.472" cy="88.472" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="69.472" cy="69.236" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="69.472" cy="50" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="69.472" cy="30.764" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="50.472" cy="88.472" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="50.472" cy="69.236" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="50.472" cy="50" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="50.472" cy="30.764" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="30.472" cy="88.472" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="30.472" cy="69.236" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="30.472" cy="50" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="30.472" cy="30.764" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="11.472" cy="69.236" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="11.472" cy="50" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="11.472" cy="30.764" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="88.472" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="69.236" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="50" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="30.764" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="11.528" cy="11.528" r="5.824" fill="currentColor"></svg:circle>`,
})
export class GeoTurfPointGridIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
