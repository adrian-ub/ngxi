import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBriefcaseIcon],svg[twemoji-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9A4E1C" d="M32 8h-6V4a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v4H4a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4M12 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2H12z"></svg:path><svg:path fill="#662113" d="M36 20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#9A4E1C" d="M36 18a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#CCD6DD" d="M22 18a2 2 0 0 1-2 2h-4a2 2 0 0 1 0-4h4a2 2 0 0 1 2 2"></svg:path>`,
})
export class TwemojiBriefcaseIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
