import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWebcamIcon],svg[icon-park-outline-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M7.825 29.766C11.462 34.756 17.352 38 24 38s12.538-3.243 16.175-8.234C43.79 33.508 46 38.508 46 44H2c0-5.492 2.209-10.492 5.825-14.234Z"></svg:path><svg:path d="M24 30c7.18 0 13-5.82 13-13S31.18 4 24 4S11 9.82 11 17s5.82 13 13 13Z"></svg:path><svg:path d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:g>`,
})
export class IconParkOutlineWebcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
