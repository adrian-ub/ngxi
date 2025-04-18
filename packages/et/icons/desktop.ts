import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etDesktopIcon],svg[et-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1.5 25H19v1.5a.5.5 0 0 0 1 0V25h17.5c.827 0 1.5-.673 1.5-1.5v-22c0-.827-.673-1.5-1.5-1.5h-36C.673 0 0 .673 0 1.5v22c0 .827.673 1.5 1.5 1.5M1 1.5a.5.5 0 0 1 .5-.5h36a.5.5 0 0 1 .5.5v22a.5.5 0 0 1-.5.5h-36a.5.5 0 0 1-.5-.5z"></svg:path><svg:path d="M3.5 22h32a.5.5 0 0 0 .5-.5v-18a.5.5 0 0 0-.5-.5h-32a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 .5.5M4 4h31v17H4zm10 24c-1.14 0-2 .86-2 2v1.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-1.425C27 28.912 26.122 28 25 28zm12 2.075V31H13v-1c0-.589.411-1 1-1h11c.57 0 1 .462 1 1.075"></svg:path></svg:g>`,
})
export class EtDesktopIcon {
  readonly viewBox = input("0 0 39 32")
  readonly width = input("1.22em")
  readonly height = input("1em")
}
