import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneNoteAltIcon],svg[ic-twotone-note-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm9.73-11.85c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71l-1.06 1.06l-2.12-2.12zM7 14.86l5.96-5.96l2.12 2.12L9.1 17H7z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M19 19H5V5h14z"></svg:path><svg:path fill="currentColor" d="m15.08 11.03l-2.12-2.12L7 14.86V17h2.1zm1.77-1.76c.2-.2.2-.51 0-.71l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06l2.12 2.12z"></svg:path>`,
})
export class IcTwotoneNoteAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
