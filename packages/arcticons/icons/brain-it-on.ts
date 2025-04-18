import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrainItOnIcon],svg[arcticons-brain-it-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20.862 8.124L10.306 30.226l16.572 9.65l14.013-20.089"></svg:path><svg:circle cx="14.651" cy="29.079" r="3.178"></svg:circle><svg:circle cx="20.142" cy="32.277" r="3.178"></svg:circle><svg:circle cx="25.634" cy="35.475" r="3.178"></svg:circle><svg:circle cx="24.061" cy="27.085" r="3.178"></svg:circle><svg:circle cx="29.553" cy="30.283" r="3.178"></svg:circle><svg:circle cx="33.266" cy="25.132" r="3.178"></svg:circle><svg:path d="M19.502 38.653H8.269"></svg:path></svg:g><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBrainItOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
