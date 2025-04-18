import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasBugIcon],svg[pajamas-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.75A.75.75 0 0 1 4.75 1h.5C6.216 1 7 1.784 7 2.75v.35a5 5 0 0 1 2 0v-.35C9 1.784 9.784 1 10.75 1h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.919A5.02 5.02 0 0 1 12.584 6h1.666a.75.75 0 0 1 0 1.5h-1.275Q13 7.746 13 8v.5h1.25a.75.75 0 0 1 0 1.5H13q0 .514-.1 1h1.35a.75.75 0 0 1 0 1.5h-1.919A5 5 0 0 1 8 15a5 5 0 0 1-4.331-2.5H1.75a.75.75 0 0 1 0-1.5H3.1a5 5 0 0 1-.1-1H1.75a.75.75 0 0 1 0-1.5H3V8q0-.254.025-.5H1.75a.75.75 0 0 1 0-1.5h1.666A5.02 5.02 0 0 1 5.5 3.669V2.75a.25.25 0 0 0-.25-.25h-.5A.75.75 0 0 1 4 1.75M11.5 8v2a3.5 3.5 0 0 1-2.75 3.42V7.5h2.715q.035.245.035.5m-4.25-.5v5.92A3.5 3.5 0 0 1 4.5 10V8q0-.255.035-.5zM10.873 6H5.127A3.5 3.5 0 0 1 8 4.5c1.19 0 2.24.593 2.873 1.5" clip-rule="evenodd"></svg:path>`,
})
export class PajamasBugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
