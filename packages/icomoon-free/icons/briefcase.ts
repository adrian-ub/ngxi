import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBriefcaseIcon],svg[icomoon-free-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h-4V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m-9-.998L6.002 3h3.996l.002.002V4H6zM15 8h-2v1.5c0 .275-.225.5-.5.5h-1a.5.5 0 0 1-.5-.5V8H5v1.5c0 .275-.225.5-.5.5h-1a.5.5 0 0 1-.5-.5V8H1V7h14z"></svg:path>`,
})
export class IcomoonFreeBriefcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
