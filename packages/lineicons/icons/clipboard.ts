import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsClipboardIcon],svg[lineicons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.186 3.75A2.25 2.25 0 0 0 13.992 2h-3.937A2.25 2.25 0 0 0 7.86 3.75H6.773A2.25 2.25 0 0 0 4.523 6v13.75A2.25 2.25 0 0 0 6.773 22h10.5a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25zm-6.881.5a.75.75 0 0 1 .75-.75h3.937a.75.75 0 0 1 .75.75v.469a.75.75 0 0 1-.75.75h-3.937a.75.75 0 0 1-.75-.75zm-1.437 1a2.25 2.25 0 0 0 2.187 1.719h3.937A2.25 2.25 0 0 0 16.18 5.25h1.094a.75.75 0 0 1 .75.75v13.75a.75.75 0 0 1-.75.75h-10.5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75z"></svg:path>`,
})
export class LineiconsClipboardIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
