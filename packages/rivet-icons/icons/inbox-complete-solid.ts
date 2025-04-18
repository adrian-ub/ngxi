import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsInboxCompleteSolidIcon],svg[rivet-icons-inbox-complete-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.414 1.5L12 .086l-4 4l-2-2L4.586 3.5L8 6.914zM0 8h6v2h4V8h6v8H0z"></svg:path>`,
})
export class RivetIconsInboxCompleteSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
