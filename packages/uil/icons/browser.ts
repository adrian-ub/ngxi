import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBrowserIcon],svg[uil-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H9a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-3 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h12Zm0-9H4V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm4 5a1 1 0 0 1-1 1h-1V9a3 3 0 0 0-.18-1H20Zm0-9H8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilBrowserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
