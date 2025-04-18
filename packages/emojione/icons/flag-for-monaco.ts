import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForMonacoIcon],svg[emojione-flag-for-monaco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9f9f9" d="M32 62c16.6 0 30-13.4 30-30H2c0 16.6 13.4 30 30 30"></svg:path><svg:path fill="#c94747" d="M32 2C15.4 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2"></svg:path>`,
})
export class EmojioneFlagForMonacoIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
