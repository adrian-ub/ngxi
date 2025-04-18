import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiRectanglePulseIcon],svg[gravity-ui-rectangle-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiRectanglePulse0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12.5h-9A1.5 1.5 0 0 1 2 11V9h3a.75.75 0 0 0 .648-.372l1.02-1.748l1.9 4.18a.75.75 0 0 0 1.33.068L11.43 8.5H14V11a1.5 1.5 0 0 1-1.5 1.5M14 7h-3a.75.75 0 0 0-.648.372L9.332 9.12l-1.9-4.18a.75.75 0 0 0-1.33-.068L4.57 7.5H2V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 14 5zM3.5 14h9a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiRectanglePulse0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiRectanglePulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
