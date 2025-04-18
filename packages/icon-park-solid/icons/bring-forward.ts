import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBringForwardIcon],svg[icon-park-solid-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M6 34h36v8H6zm0-14h36v8H6z"></svg:path><svg:path stroke-linecap="round" d="m30 12l-6-6l-6 6v0m6 16v6m0-28v14"></svg:path></svg:g>`,
})
export class IconParkSolidBringForwardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
