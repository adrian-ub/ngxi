import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCentCircleIcon],svg[majesticons-cent-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-6a1 1 0 1 0-2 0v1.1a5.002 5.002 0 0 0 0 9.8V18a1 1 0 1 0 2 0v-1.1c.98-.2 1.856-.685 2.536-1.364a1 1 0 1 0-1.415-1.415a3 3 0 1 1 0-4.243a1 1 0 1 0 1.415-1.414A5 5 0 0 0 13 7.1z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCentCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
