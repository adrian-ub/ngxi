import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEyeIcon],svg[openmoji-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="35.75" cy="36.428" fill="#FFF" rx="34.81" ry="20.428"></svg:ellipse><svg:ellipse cx="35.75" cy="36.428" fill="#FFF" rx="34.81" ry="20.428"></svg:ellipse><svg:circle cx="36" cy="35.958" r="15.484" fill="#a57939"></svg:circle><svg:ellipse cx="35.75" cy="36.428" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" rx="34.81" ry="20.428"></svg:ellipse><svg:circle cx="36" cy="35.958" r="8.442"></svg:circle><svg:circle cx="36" cy="35.958" r="8.442" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="36" cy="35.958" r="15.484" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:circle>`,
})
export class OpenmojiEyeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
