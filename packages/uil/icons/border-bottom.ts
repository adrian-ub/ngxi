import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBorderBottomIcon],svg[uil-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.5a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0-8a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-4-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0 8a1 1 0 1 0-1-1a1 1 0 0 0 1 1m12-8a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-4 8a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-4-8a1 1 0 1 0-1-1a1 1 0 0 0 1 1m4 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m4 10a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 8H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2m0-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-16 6a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0 8a1 1 0 1 0-1-1a1 1 0 0 0 1 1m0-12a1 1 0 1 0-1-1a1 1 0 0 0 1 1"></svg:path>`,
})
export class UilBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
