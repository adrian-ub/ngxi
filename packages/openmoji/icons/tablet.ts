import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTabletIcon],svg[openmoji-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M13.353 8.12h44.879v55.438H13.353z"></svg:path><svg:path fill="#FFF" d="M58.231 25.747L40.604 8.12H19.936l-.022.021l38.317 38.317z"></svg:path><svg:path fill="#3F3F3F" d="M17.881 13.037H54.04v41.439H17.881z"></svg:path><svg:path fill="#9B9B9A" d="M54.04 42.266V21.555l-8.518-8.518H24.81z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13.47 62.54V9.166c0-.55.45-1 1-1h43.044c.55 0 1 .45 1 1v53.372c0 .55-.45 1-1 1H14.47c-.55 0-1-.45-1-1"></svg:path><svg:circle cx="35.992" cy="59.084" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M17.881 13.037H54.04v41.439H17.881z"></svg:path>`,
})
export class OpenmojiTabletIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
