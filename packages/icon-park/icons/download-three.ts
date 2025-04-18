import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadThreeIcon],svg[icon-park-download-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 28L24 36L16 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20V35.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 14H32"></svg:path></svg:g>`,
})
export class IconParkDownloadThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
