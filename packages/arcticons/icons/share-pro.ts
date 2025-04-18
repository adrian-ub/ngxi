import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShareProIcon],svg[arcticons-share-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.8 27.584h15.013A7.17 7.17 0 0 0 24 31.168a7.17 7.17 0 0 0 6.188-3.584h7.633A14.33 14.33 0 0 1 24 38.332a14.33 14.33 0 0 1-13.82-10.748m35.019-7.168H30.203A7.17 7.17 0 0 0 24 16.832a7.17 7.17 0 0 0-6.188 3.584H10.18A14.33 14.33 0 0 1 24 9.668a14.33 14.33 0 0 1 13.82 10.748"></svg:path>`,
})
export class ArcticonsShareProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
