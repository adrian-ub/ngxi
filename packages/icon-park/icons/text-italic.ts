import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextItalicIcon],svg[icon-park-text-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 6H36"></svg:path><svg:path d="M12 42H28"></svg:path><svg:path d="M29 5.95215L19 41.9998"></svg:path></svg:g>`,
})
export class IconParkTextItalicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
