import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPauseIcon],svg[uil-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a3 3 0 0 0-3 3v14a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0ZM8 2a3 3 0 0 0-3 3v14a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class UilPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
