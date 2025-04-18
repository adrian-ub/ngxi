import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTextRotateUpIcon],svg[ic-round-text-rotate-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.35 4.35c-.2-.2-.51-.2-.71 0l-1.79 1.79c-.31.32-.09.86.36.86H17v12c0 .55.45 1 1 1s1-.45 1-1V7h.79c.45 0 .67-.54.35-.85zM11.8 15.5v-5l1.6-.66c.36-.14.6-.49.6-.88c0-.69-.71-1.15-1.34-.88l-8.97 3.88c-.42.17-.69.58-.69 1.04s.27.87.69 1.05l8.97 3.88c.63.27 1.34-.2 1.34-.89c0-.39-.24-.74-.6-.89zM4.98 13L10 11.13v3.74z"></svg:path>`,
})
export class IcRoundTextRotateUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
