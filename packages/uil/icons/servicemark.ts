import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilServicemarkIcon],svg[uil-servicemark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 9h4a1 1 0 0 0 0-2h-4a3 3 0 0 0 0 6h2a1 1 0 0 1 0 2h-4a1 1 0 0 0 0 2h4a3 3 0 0 0 0-6h-2a1 1 0 0 1 0-2m15.92-1.38a1 1 0 0 0-.54-.54a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21L17 10.09l-2.79-2.8a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.54.54a1 1 0 0 0-.08.38v8a1 1 0 0 0 2 0v-5.59l1.79 1.8a1 1 0 0 0 1.42 0l1.79-1.8V16a1 1 0 0 0 2 0V8a1 1 0 0 0-.08-.38"></svg:path>`,
})
export class UilServicemarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
