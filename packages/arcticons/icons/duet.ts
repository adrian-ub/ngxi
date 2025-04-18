import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDuetIcon],svg[arcticons-duet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="10.818" r="8.318" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="37.182" r="8.318" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.872 0 21.497 9.624 21.497 21.497c0 3.554-.863 6.907-2.39 9.86h0C40.885 25.382 33.172 19.129 24 19.129M24 45.5c-11.872 0-21.497-9.624-21.497-21.497c0-3.554.863-6.907 2.39-9.86h0C7.115 22.618 14.828 28.871 24 28.871"></svg:path>`,
})
export class ArcticonsDuetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
