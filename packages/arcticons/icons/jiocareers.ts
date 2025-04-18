import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJiocareersIcon],svg[arcticons-jiocareers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.325 9.145h27.796V42.5H8.325zm4.647 24.971h18.592M13.112 38.87h18.591"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.609 5.5h27.066v33.629"></svg:path><svg:circle cx="22.088" cy="15.017" r="3.848" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.11 29.58h12.502m-.001 0c.527-.127 1.172-.283 1.322-1.427s-.135-3.29-1.515-5.005s-3.856-3-6.37-2.946c-2.513.054-5.063 1.446-6.42 3.2s-1.516 3.87-1.237 4.96c.28 1.09.999 1.154 1.718 1.218"></svg:path>`,
})
export class ArcticonsJiocareersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
