import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilUniversityIcon],svg[uil-university-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10a1 1 0 0 0 1-1V6a1 1 0 0 0-.684-.948l-9-3a1 1 0 0 0-.632 0l-9 3A1 1 0 0 0 2 6v3a1 1 0 0 0 1 1h1v7.184A2.995 2.995 0 0 0 2 20v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a2.995 2.995 0 0 0-2-2.816V10Zm-1 11H4v-1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM6 17v-7h2v7Zm4 0v-7h4v7Zm6 0v-7h2v7ZM4 8V6.72l8-2.666l8 2.667V8Z"></svg:path>`,
})
export class UilUniversityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
