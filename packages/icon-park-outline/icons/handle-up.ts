import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHandleUpIcon],svg[icon-park-outline-handle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linecap="round" rx="3"></svg:rect><svg:path d="m14 28l10-10l10 10z"></svg:path></svg:g>`,
})
export class IconParkOutlineHandleUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
