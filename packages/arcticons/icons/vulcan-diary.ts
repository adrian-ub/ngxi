import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVulcanDiaryIcon],svg[arcticons-vulcan-diary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.844h37v25.565h-37zm10.991 20.424h15.018m-10.562-8.444h6.106M24 19.77v6.107m0-19.146v4.113m0 25.565v4.86m-4.195-4.862l-3.55 4.855m15.49 0l-3.55-4.855"></svg:path>`,
})
export class ArcticonsVulcanDiaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
