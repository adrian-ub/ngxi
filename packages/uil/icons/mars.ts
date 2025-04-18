import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMarsIcon],svg[uil-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.42 4.12a1 1 0 0 0-.54-.54a1 1 0 0 0-.38-.08h-4a1 1 0 0 0 0 2h1.59l-2.4 2.4a7 7 0 1 0 1.41 1.41l2.4-2.4V8.5a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38M14 17a5 5 0 1 1 0-7a5 5 0 0 1 0 7"></svg:path>`,
})
export class UilMarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
