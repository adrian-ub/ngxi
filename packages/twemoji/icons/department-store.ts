import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDepartmentStoreIcon],svg[twemoji-department-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCC4D" d="M14 34a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2z"></svg:path><svg:path fill="#BCBEC0" d="M34 12H20v2h16a2 2 0 0 0-2-2"></svg:path><svg:path fill="#55ACEE" d="M20 16h14v20H20z"></svg:path><svg:path fill="#FFE8B6" d="M18 0H2a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h18V2a2 2 0 0 0-2-2"></svg:path><svg:path fill="#BCBEC0" d="M18 0H2a2 2 0 0 0-2 2h20a2 2 0 0 0-2-2"></svg:path><svg:path fill="#55ACEE" d="M2 22h16v4H2zm0-6h16v4H2zm0-6h16v4H2zm0-6h16v4H2zm0 24h16v8H2z"></svg:path><svg:path fill="#3B88C3" d="M6 32h8v4H6zm17 0h8v4h-8z"></svg:path><svg:path fill="#FFCC4D" d="M20 26h15v2H20zm0-6h15v2H20z"></svg:path><svg:path fill="#DD2E44" d="M36 7a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#58595B" d="M26 9h2v3h-2zm4 0h2v3h-2z"></svg:path><svg:path fill="#F4ABBA" d="M24 5h2v2h-2z"></svg:path><svg:path fill="#FFF" d="M26 5h2v2h-2z"></svg:path><svg:path fill="#F4ABBA" d="M28 5h2v2h-2z"></svg:path><svg:path fill="#FFF" d="M30 5h2v2h-2z"></svg:path><svg:path fill="#F4ABBA" d="M32 5h2v2h-2z"></svg:path>`,
})
export class TwemojiDepartmentStoreIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
