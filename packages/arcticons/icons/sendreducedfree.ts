import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSendreducedfreeIcon],svg[arcticons-sendreducedfree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="23.54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" rx="13" ry="2.77"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M11.63 17.17h24.74M11.63 4.5h24.74m-24.74 6.37h24.74M27.21 43.5a7 7 0 0 0-6.42 0m9.21-6a14 14 0 0 0-12 0m14.66-5.75a20.69 20.69 0 0 0-17.32 0"></svg:path>`,
})
export class ArcticonsSendreducedfreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
