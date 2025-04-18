import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShintoShrineIcon],svg[openmoji-shinto-shrine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D22F27" d="M16 33h40v4H16z"></svg:path><svg:path fill="#EA5A47" d="M22 27h4v28h-4zm24 0h4v28h-4z"></svg:path><svg:path fill="#3F3F3F" d="M20.5 55h7v5h-7zm24 0h7v5h-7zM34 27h4v6h-4z"></svg:path><svg:path fill="#EA5A47" d="M12.5 21s11.25 2 15 2H46c3.375 0 13.5-2 13.5-2l-4 3l-2 3h-35l-2-3z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16 33h6v4h-6zm10 0h20v4H26zm24 0h6v4h-6zm-28-6h4v28h-4zm24 0h4v28h-4zM20.5 55h7v5h-7zm24 0h7v5h-7zM34 27h4v6h-4zm25.5-6l-4 3l-2 3h-35l-2-3l-4-3s11.25 2 15 2H46c3.38 0 13.5-2 13.5-2"></svg:path>`,
})
export class OpenmojiShintoShrineIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
