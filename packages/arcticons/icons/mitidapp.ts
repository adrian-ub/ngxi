import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMitidappIcon],svg[arcticons-mitidapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="14.185" cy="17.762" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.112" ry="5.159"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.185 26.048c-5.315.027-9.707 3.239-9.685 9.349h19.37c.015-5.947-4.37-9.376-9.685-9.349m12.668-13.445v22.794h6.514C40.077 35.415 43.53 30.254 43.5 24s-3.24-11.422-10.133-11.396z"></svg:path>`,
})
export class ArcticonsMitidappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
