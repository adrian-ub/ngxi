import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundSearchIcon],svg[arcticons-sound-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.663 34.643V14.764h8.912c.815 0 1.476-.66 1.476-1.476V5.976c0-.815-.66-1.476-1.476-1.476H22.848c-.815 0-1.476.66-1.476 1.476v20.188m6.291-11.4l9.885-9.885m-9.885 9.885l-6.312-6.311"></svg:path><svg:circle cx="18.806" cy="34.643" r="8.857" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSoundSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
