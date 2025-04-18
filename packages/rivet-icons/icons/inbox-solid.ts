import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsInboxSolidIcon],svg[rivet-icons-inbox-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.086V0H7v4.086l-1.5-1.5L4.086 4L8 7.914L11.914 4L10.5 2.586zM0 8h6v2h4V8h6v8H0z"></svg:path>`,
})
export class RivetIconsInboxSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
