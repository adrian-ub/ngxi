import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNaverClovaIcon],svg[arcticons-naver-clova-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 39.326c-4.232 4.232-11.094 4.232-15.326 0S4.442 28.232 8.674 24c-4.232-4.232-4.232-11.094 0-15.326s11.094-4.232 15.326 0c4.232-4.232 11.094-4.232 15.326 0s4.232 11.094 0 15.326h0c4.232 4.232 4.232 11.094 0 15.326s-11.094 4.232-15.326 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 35.304A8.28 8.28 0 1 1 12.696 24A8.28 8.28 0 1 1 24 12.696A8.28 8.28 0 1 1 35.304 24A8.28 8.28 0 1 1 24 35.304"></svg:path>`,
})
export class ArcticonsNaverClovaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
