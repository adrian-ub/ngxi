import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidReverseLensIcon],svg[icon-park-solid-reverse-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSReverseLens0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M13 25V10h6l2-3h6l2 3h6v15z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m20 35l4 4l-4 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 38.168C39.064 36.625 45 33.1 45 29c0-2.252-1.488-4.33-4-6.001M24 39C12.954 39 3 34.523 3 29c0-2.252 1.488-4.33 4-6.001"></svg:path><svg:path fill="#000" stroke="#000" stroke-miterlimit="10" d="M24 20a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSReverseLens0)"></svg:path>`,
})
export class IconParkSolidReverseLensIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
