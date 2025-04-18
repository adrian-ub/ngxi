import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightContentPasteIcon],svg[mdi-light-content-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 1a2.5 2.5 0 0 1 2.45 2H17a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3.05a2.5 2.5 0 0 1 2.45-2m1.41 2a1.495 1.495 0 0 0-2.82 0zM6 4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1v3H7V4zm2 0v2h7V4z"></svg:path>`,
})
export class MdiLightContentPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
