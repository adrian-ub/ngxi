import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileSearchIcon],svg[mdi-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9a6.48 6.48 0 0 1-.36-9.18C13.69 9.5 17.33 9.13 20 11V8zm-1 7V3.5L18.5 9zm7.31 9.9c1.33-2.11.69-4.9-1.4-6.22c-2.11-1.33-4.91-.68-6.22 1.4c-1.34 2.11-.69 4.89 1.4 6.22c1.46.93 3.32.93 4.79.02L22 23.39L23.39 22zm-3.81.1a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class MdiFileSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
