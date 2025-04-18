import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsInboxCompleteIcon],svg[rivet-icons-inbox-complete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.914L13.414 1.5L12 .086l-4 4l-2-2L4.586 3.5zM6 8H0v8h16V8h-6v2H6zm6 4v-2h2v4H2v-4h2v2z"></svg:path>`,
})
export class RivetIconsInboxCompleteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
