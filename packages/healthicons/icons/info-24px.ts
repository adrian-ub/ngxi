import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsInfo24pxIcon],svg[healthicons-info-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-12.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.447 7.394A1 1 0 0 0 13 15v-3.5a1 1 0 0 0-1.447-.894l-1 .5A1 1 0 0 0 11 13v3.5a1 1 0 0 0 1.447.894z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsInfo24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
