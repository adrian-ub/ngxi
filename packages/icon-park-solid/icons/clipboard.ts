import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidClipboardIcon],svg[icon-park-solid-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M17 7h-7a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7"></svg:path><svg:path fill="currentColor" d="M17 4h14v6H17z"></svg:path></svg:g>`,
})
export class IconParkSolidClipboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
