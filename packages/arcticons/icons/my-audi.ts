import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyAudiIcon],svg[arcticons-my-audi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9.567" cy="24" r="6.067"></svg:circle><svg:circle cx="19.189" cy="24" r="6.067"></svg:circle><svg:circle cx="28.811" cy="24" r="6.067"></svg:circle><svg:circle cx="38.433" cy="24" r="6.067"></svg:circle></svg:g>`,
})
export class ArcticonsMyAudiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
