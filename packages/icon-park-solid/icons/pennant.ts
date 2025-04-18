import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPennantIcon],svg[icon-park-solid-pennant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 44h4M12 6V4zm0 16v22zm0 22H8zm-4 0h8"></svg:path><svg:path fill="currentColor" d="M12 6v16l28-8z"></svg:path></svg:g>`,
})
export class IconParkSolidPennantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
