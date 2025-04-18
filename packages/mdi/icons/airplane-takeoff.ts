import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneTakeoffIcon],svg[mdi-airplane-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10L8 3.57l-1.91.51l4.14 7.17l-4.97 1.33l-1.97-1.54l-1.45.39l1.82 3.16l.77 1.33l1.6-.42l5.31-1.43l4.35-1.16L21 11.5c.81-.24 1.28-1.06 1.07-1.86"></svg:path>`,
})
export class MdiAirplaneTakeoffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
