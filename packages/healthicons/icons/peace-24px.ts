import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPeace24pxIcon],svg[healthicons-peace-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1-17.938v7.524l5.32 5.32A8.001 8.001 0 0 0 13 4.062m3.906 14.258L13 14.414v5.524a7.96 7.96 0 0 0 3.906-1.618M11 19.938v-5.524L7.094 18.32A7.96 7.96 0 0 0 11 19.938m-5.32-3.032l5.32-5.32V4.062a8.001 8.001 0 0 0-5.32 12.844" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPeace24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
