import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsBrowserWindowSolidIcon],svg[rivet-icons-browser-window-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h14v14H1zm5 3a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m4 3H3v2h10z"></svg:path>`,
})
export class RivetIconsBrowserWindowSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
