import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundAirplanemodeInactiveIcon],svg[ic-round-airplanemode-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14.6c0 .7-.67 1.2-1.34 1.01l-3.15-.93l-7.01-7.01V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l7.98 4.7c.32.18.52.53.52.9m-8.5-1.1L9.56 9.56L3.51 3.51A.996.996 0 1 0 2.1 4.92l5.67 5.67l-5.25 3.11c-.32.18-.52.53-.52.9c0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09l.42.11l1.9.48l.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-2.67l5.57 5.57a.996.996 0 1 0 1.41-1.41z"></svg:path>`,
})
export class IcRoundAirplanemodeInactiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
