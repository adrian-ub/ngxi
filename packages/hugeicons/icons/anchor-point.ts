import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAnchorPointIcon],svg[hugeicons-anchor-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M2 12a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m11.707-1.707C13.414 10 12.943 10 12 10s-1.414 0-1.707.293m3.414 0C14 10.586 14 11.057 14 12s0 1.414-.293 1.707m0-3.414q0 0 0 0m-3.414 0C10 10.586 10 11.057 10 12s0 1.414.293 1.707m0-3.414q0 0 0 0m0 3.414C10.586 14 11.057 14 12 14s1.414 0 1.707-.293m-3.414 0q0 0 0 0m3.414 0q0 0 0 0m7-11.414C20.414 2 19.943 2 19 2s-1.414 0-1.707.293m3.414 0C21 2.586 21 3.057 21 4s0 1.414-.293 1.707m0-3.414q0 0 0 0m-3.414 0C17 2.586 17 3.057 17 4s0 1.414.293 1.707m0-3.414q0 0 0 0m0 3.414C17.586 6 18.057 6 19 6s1.414 0 1.707-.293m-3.414 0q0 0 0 0m3.414 0q0 0 0 0m-14 12.586C6.414 18 5.943 18 5 18s-1.414 0-1.707.293m3.414 0C7 18.586 7 19.057 7 20s0 1.414-.293 1.707m0-3.414q0 0 0 0m-3.414 0C3 18.586 3 19.057 3 20s0 1.414.293 1.707m0-3.414q0 0 0 0m0 3.414C3.586 22 4.057 22 5 22s1.414 0 1.707-.293m-3.414 0q0 0 0 0m3.414 0q0 0 0 0M5 12h5m4 0h5m-7-2c0-2 .833-6 5-6m-5 10c0 2-.833 6-5 6" color="currentColor"></svg:path>`,
})
export class HugeiconsAnchorPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
