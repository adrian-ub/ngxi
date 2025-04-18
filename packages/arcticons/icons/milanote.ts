import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilanoteIcon],svg[arcticons-milanote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.83 41.83L7.207 7.207c-.63-.63-1.707-.184-1.707.707V40.5a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2V7.914c0-.89-1.077-1.337-1.707-.707L6.086 41.914"></svg:path>`,
})
export class ArcticonsMilanoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
