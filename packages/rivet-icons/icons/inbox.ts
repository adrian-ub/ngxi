import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsInboxIcon],svg[rivet-icons-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.086V0H7v4.086l-1.5-1.5L4.086 4L8 7.914L11.914 4L10.5 2.586zM6 8H0v8h16V8h-6v2H6zm6 4v-2h2v4H2v-4h2v2z"></svg:path>`,
})
export class RivetIconsInboxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
