import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiOfficeBuildingIcon],svg[twemoji-office-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DAC8B1" d="M34 13a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zm-22 0a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#F1DCC1" d="M36 34a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#DAC8B1" d="M22 9V7c0-.738-.404-1.376-1-1.723V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v.277c-.595.347-1 .985-1 1.723v2h-1v27h10V9z"></svg:path><svg:path fill="#55ACEE" d="M14 7h2v2h-2zm6 0h2v2h-2zm-3 0h2v2h-2z"></svg:path><svg:path fill="#3B88C3" d="M15 15h2v14h-2zm4 0h2v14h-2z"></svg:path><svg:path fill="#55ACEE" d="M24 17h2v12h-2zm4 0h2v12h-2zm4 0h2v12h-2zM2 17h2v12H2zm4 0h2v12H6zm4 0h2v12h-2zM2 30h2v2H2zm4 0h2v2H6zm4 0h2v2h-2z"></svg:path><svg:path fill="#3B88C3" d="M15 30h2v2h-2zm4 0h2v2h-2z"></svg:path><svg:path fill="#55ACEE" d="M24 30h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path><svg:path fill="#66757F" d="M2 33h2v3H2zm4 0h2v3H6zm4 0h2v3h-2zm5 0h2v3h-2zm4 0h2v3h-2zm5 0h2v3h-2zm4 0h2v3h-2zm4 0h2v3h-2z"></svg:path>`,
})
export class TwemojiOfficeBuildingIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
