import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCollectComputerIcon],svg[icon-park-outline-collect-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9M24 34v8m-10 0h20m-.7-36C31.478 6 30 7.435 30 9.205c0 3.204 3.9 6.117 6 6.795c2.1-.678 6-3.59 6-6.795C42 7.435 40.523 6 38.7 6A3.33 3.33 0 0 0 36 7.362A3.33 3.33 0 0 0 33.3 6"></svg:path>`,
})
export class IconParkOutlineCollectComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
