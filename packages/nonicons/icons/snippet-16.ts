import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsSnippet16Icon],svg[nonicons-snippet-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 4c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v6.5a.75.75 0 0 1-1.5 0V4a.25.25 0 0 0-.25-.25h-10A.25.25 0 0 0 3 4v6.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2.25 13.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m12 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-3 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-6 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m3 0a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class NoniconsSnippet16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
