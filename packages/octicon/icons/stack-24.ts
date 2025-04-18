import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconStack24Icon],svg[octicon-stack-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.063 1.456a1.75 1.75 0 0 1 1.874 0l8.383 5.316a1.75 1.75 0 0 1 0 2.956l-8.383 5.316a1.75 1.75 0 0 1-1.874 0L2.68 9.728a1.75 1.75 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z"></svg:path><svg:path fill="currentColor" d="M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.75 1.75 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035"></svg:path><svg:path fill="currentColor" d="M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.75 1.75 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035"></svg:path>`,
})
export class OcticonStack24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
