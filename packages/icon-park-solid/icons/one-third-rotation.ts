import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidOneThirdRotationIcon],svg[icon-park-solid-one-third-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 40.015A20 20 0 0 1 24 44c-7.403 0-13.866-4.022-17.324-10H15M32 5.664C39.064 8.75 44 15.8 44 24c0 3.643-.974 7.058-2.676 10l-4.042-7M4.099 26A20 20 0 0 1 4 24C4 12.954 12.954 4 24 4l-4.042 7"></svg:path><svg:path fill="currentColor" d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path></svg:g>`,
})
export class IconParkSolidOneThirdRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
