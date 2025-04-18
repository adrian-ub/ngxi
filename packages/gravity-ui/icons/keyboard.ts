import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiKeyboardIcon],svg[gravity-ui-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h10a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 13 12H3a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 3 4M0 5.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm6.25 3.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM4.5 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiKeyboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
