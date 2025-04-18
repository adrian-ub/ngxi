import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForChileIcon],svg[emojione-flag-for-chile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M2 32c0 16.6 13.4 30 30 30s30-13.4 30-30z"></svg:path><svg:path fill="#f9f9f9" d="M32 2c16.6 0 30 13.4 30 30H32z"></svg:path><svg:path fill="#2a5f9e" d="M32 2C15.4 2 2 15.4 2 32h30z"></svg:path><svg:path fill="#f9f9f9" d="m20 21.7l4.9 3.3l-1.8-5.3l4.9-3.5h-6.1L20 11l-1.8 5.2H12l4.9 3.5l-1.8 5.3z"></svg:path>`,
})
export class EmojioneFlagForChileIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
