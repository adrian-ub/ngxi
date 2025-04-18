import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPlacardIcon],svg[twemoji-placard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D99E82" d="M20 33.5v-31A1.5 1.5 0 0 0 18.5 1h-2A1.5 1.5 0 0 0 15 2.5v31a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5"></svg:path><svg:path fill="#E1E8ED" d="M28 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"></svg:path><svg:path fill="#66757F" d="M17 14h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2m8 0h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2m0-5H10a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2"></svg:path><svg:path fill="#C1694F" d="M15 21h5v2h-5z"></svg:path>`,
})
export class TwemojiPlacardIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
