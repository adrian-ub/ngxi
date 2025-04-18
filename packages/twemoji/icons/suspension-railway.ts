import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSuspensionRailwayIcon],svg[twemoji-suspension-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#58595B" d="M30 16a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#F4900C" d="M4 14a4 4 0 0 0-4 4v10a8 8 0 0 0 8 8h28V14z"></svg:path><svg:path fill="#FFD983" d="M.587 31H36v-2H.069c.087.698.263 1.369.518 2"></svg:path><svg:path fill="#808285" d="M0 2h36v6H0z"></svg:path><svg:path fill="#414042" d="M0 4h36v2H0z"></svg:path><svg:path fill="#A7A9AC" d="M28 0H18a3 3 0 1 0 0 6h3v4l-2 2h8l-2-2V6h3a3 3 0 1 0 0-6"></svg:path><svg:path fill="#3B88C3" d="M14 14h22v15H14z"></svg:path><svg:path fill="#58595B" d="M12 25a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#414042" d="M24 23a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm10 0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#58595B" d="M0 17v10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path>`,
})
export class TwemojiSuspensionRailwayIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
