import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLemonIcon],svg[icon-park-twotone-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLemon0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M36 26c0-6.408-4.383-12.811-9-14.473L24 8l-3 3.527c-4.617 1.662-9 8.065-9 14.473s4.383 12.811 9 14.473c.954.343 1.96 3.527 3 3.527s2.046-3.184 3-3.527c4.617-1.662 9-8.065 9-14.473"></svg:path><svg:path d="M35.142 4.232c1.011.13 1.586 1.124 1.192 2.065c-.534 1.275-1.505 2.957-3.138 3.9c-1.632.942-3.575.942-4.946.767c-1.011-.13-1.586-1.124-1.192-2.065c.534-1.274 1.506-2.956 3.138-3.899c1.633-.943 3.575-.943 4.946-.768Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLemon0)"></svg:path>`,
})
export class IconParkTwotoneLemonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
