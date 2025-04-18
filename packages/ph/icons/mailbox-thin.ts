import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMailboxThinIcon],svg[ph-mailbox-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 152a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m136-36v60a12 12 0 0 1-12 12h-92v36a4 4 0 0 1-8 0v-36H32a12 12 0 0 1-12-12v-60a56.06 56.06 0 0 1 56-56h80V24a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-28v32h16a56.06 56.06 0 0 1 56 56m-112 64v-64a48 48 0 0 0-96 0v60a4 4 0 0 0 4 4Zm104-64a48.05 48.05 0 0 0-48-48h-16v76a4 4 0 0 1-8 0V68h-51.18A56 56 0 0 1 132 116v64h92a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhMailboxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
