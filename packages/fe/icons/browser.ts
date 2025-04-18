import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBrowserIcon],svg[fe-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10v8h16v-8zm0-4v2h2V6zm4 0v2h12V6zM4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"></svg:path>`,
})
export class FeBrowserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
