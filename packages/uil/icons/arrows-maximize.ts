import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilArrowsMaximizeIcon],svg[uil-arrows-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 14a1 1 0 0 0-1 1v3.59L5.41 4H9a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 2 3v6a1 1 0 0 0 2 0V5.41L18.59 20H15a1 1 0 0 0 0 2h6a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 22 21v-6a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilArrowsMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
