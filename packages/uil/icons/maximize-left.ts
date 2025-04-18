import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMaximizeLeftIcon],svg[uil-maximize-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.41 4H7a1 1 0 0 0 0-2H3a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 2 3v4a1 1 0 0 0 2 0V5.41l5.79 5.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM21 16a1 1 0 0 0-1 1v1.59l-5.79-5.8a1 1 0 0 0-1.42 1.42l5.8 5.79H17a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 22 21v-4a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilMaximizeLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
