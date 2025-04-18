import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDiamondsIcon],svg[icon-park-solid-diamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDiamonds0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M12 8h24l8 10l-20 24L4 18z"></svg:path><svg:path stroke="#000" d="M4 18h40M24 42l-8-24m8 24l8-24"></svg:path><svg:path stroke="#fff" d="m8 13l-4 5l20 24l20-24l-4-5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDiamonds0)"></svg:path>`,
})
export class IconParkSolidDiamondsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
