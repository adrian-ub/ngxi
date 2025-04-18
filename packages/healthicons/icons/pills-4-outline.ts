import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills4OutlineIcon],svg[healthicons-pills-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M18.34 11.956a1 1 0 0 1-.282 1.386l-6.011 3.984a1 1 0 0 1-1.105-1.667l6.012-3.985a1 1 0 0 1 1.386.282M33.5 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M31.903 10.18a1 1 0 0 1 1.285.591l2.5 6.765a1 1 0 1 1-1.876.694l-2.5-6.766a1 1 0 0 1 .59-1.284M14.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M16.275 37.75a1 1 0 0 1-1.308-.537l-2.78-6.655a1 1 0 1 1 1.847-.77l2.778 6.655a1 1 0 0 1-.537 1.308M33.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M36.989 30.492a1 1 0 0 1-.105 1.41l-5.462 4.71a1 1 0 1 1-1.306-1.514l5.462-4.71a1 1 0 0 1 1.41.104"></svg:path></svg:g>`,
})
export class HealthiconsPills4OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
