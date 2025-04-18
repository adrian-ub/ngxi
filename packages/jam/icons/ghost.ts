import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGhostIcon],svg[jam-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 0 1 8 8v12l-4.919-1l-3.08 1l-2.992-1L0 20V8a8 8 0 0 1 8-8m6 8A6 6 0 0 0 2 8v9.561l3.138-.626l2.871.96l2.955-.96l3.036.618zm-8.5 2a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class JamGhostIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
