import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEasterEggsIcon],svg[arcticons-easter-eggs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.223 11.755c-8.095 8.789-23.636 8.205-34.47-.595m29.235 4.803l4.41 7.098M8.744 23.02l4.239-7.6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.829 29.323c3.453 18.233 5.044 16.743 5.598 1.4c.083-2.317.09-9.273.09-9.273h-1.992s-.082 4.415-.082 6.06c0 6.68-1.349 9.384-3.413 2.88l-2.738-13.25m6.233-6.845q.99-.585 2-.01"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.525 11.16V8.755c-.335-1.057-1.58-1.057-2 .06v2.347"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24m43 0c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.525 16.094h2v3.735h-2zm0-1.963h2"></svg:path><svg:circle cx="20.413" cy="22.9" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.55" cy="20.081" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.563" cy="24.269" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.327" cy="20.03" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.108" cy="24.848" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.538" cy="27.2" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.538" cy="29.917" r=".75" fill="currentColor"></svg:circle><svg:circle cx="10.194" cy="33.441" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.479" cy="28.82" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.322" cy="27.098" r=".75" fill="currentColor"></svg:circle><svg:circle cx="38.731" cy="34.911" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.65" cy="36.733" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26.937" cy="32.837" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40.473" cy="16.909" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsEasterEggsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
