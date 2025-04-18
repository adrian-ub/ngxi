import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenGolfScoreIcon],svg[arcticons-rakuten-golf-score-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.381 22.627v-8H24c1.48 0 2.681 1.203 2.681 2.687S25.481 20 24 20h-2.619m2.62 0l2.62 2.625m-7.766 1.653l10.292-.003l-8.302 1.922z"></svg:path><svg:circle cx="24" cy="20" r="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.396 35.86a17.5 17.5 0 0 1-14.792 0M24 43.5v-6"></svg:path><svg:circle cx="13.594" cy="26.947" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.901" cy="29.373" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.056" cy="26.947" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.363" cy="29.373" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.195" cy="31.799" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsRakutenGolfScoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
