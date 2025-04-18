import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsToyotaIcon],svg[arcticons-toyota-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="20.5" ry="13.175"></svg:ellipse><svg:ellipse cx="24" cy="24.872" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.958" ry="12.303"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.98 13.802c1.652 1.071 2.533 2.324 2.533 3.604h0c0 3.635-6.946 6.581-15.513 6.581h0c-8.568 0-15.513-2.946-15.513-6.58h0c0-1.284.883-2.538 2.542-3.611"></svg:path>`,
})
export class ArcticonsToyotaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
