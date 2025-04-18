import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPromptSessionIcon],svg[carbon-prompt-session-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 25.586l-2-2V21h-2v3.414L25.586 27z"></svg:path><svg:path fill="currentColor" d="M24 31c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7m0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5m4-4h2V5c0-1.103-.897-2-2-2h-3v2h3z"></svg:path><svg:circle cx="9" cy="13" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="13" r="2" fill="currentColor"></svg:circle><svg:circle cx="23" cy="13" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7 23H4c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h3v2H4v16h3z"></svg:path>`,
})
export class CarbonPromptSessionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
