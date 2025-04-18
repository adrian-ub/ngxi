import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForPanamaIcon],svg[emojione-flag-for-panama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 2v30h30C62 15.4 48.6 2 32 2"></svg:path><svg:path fill="#2a5f9e" d="M32 62V32H2c0 16.6 13.4 30 30 30"></svg:path><svg:path fill="#f9f9f9" d="M32 62V32h30c0 16.6-13.4 30-30 30m0-60v30H2C2 15.4 15.4 2 32 2"></svg:path><svg:path fill="#2a5f9e" d="m17 20.7l3.1 2.3l-1.2-3.8l3.1-2.4h-3.8L17 13l-1.2 3.8H12l3.1 2.4l-1.2 3.8z"></svg:path><svg:path fill="#ed4c5c" d="m47 46.7l3.1 2.3l-1.2-3.8l3.1-2.4h-3.8L47 39l-1.2 3.8H42l3.1 2.4l-1.2 3.8z"></svg:path>`,
})
export class EmojioneFlagForPanamaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
