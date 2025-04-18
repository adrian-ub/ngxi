import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasDumbbellIcon],svg[pajamas-dumbbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.5v7h1v-7zM3.5 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8.75h3V12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.25h-3V4a1 1 0 0 0-1-1zM11 4.5v7h1v-7zm4.25.75A.75.75 0 0 1 16 6v4.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75M1.5 6A.75.75 0 0 0 0 6v4.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasDumbbellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
