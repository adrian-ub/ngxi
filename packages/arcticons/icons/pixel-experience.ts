import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixelExperienceIcon],svg[arcticons-pixel-experience-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="17.604" r="14.104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="17.604" r="8.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 9.404V3.5m0 22.304v5.904m8.2-14.104h5.904m-22.304 0H9.896M15.8 29.078v12.47a2.95 2.95 0 0 1-2.952 2.952h0a2.95 2.95 0 0 1-2.952-2.952V17.605"></svg:path>`,
})
export class ArcticonsPixelExperienceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
