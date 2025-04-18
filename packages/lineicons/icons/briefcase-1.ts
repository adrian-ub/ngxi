import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBriefcase1Icon],svg[lineicons-briefcase-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.023 3a2.25 2.25 0 0 0-2.25 2.25V6h-3a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 19.274 6h-3v-.75A2.25 2.25 0 0 0 14.023 3zm4.75 3h-5.5v-.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75zm-10 1.5h14.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class LineiconsBriefcase1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
