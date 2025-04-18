import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseUploadOutlineIcon],svg[mdi-briefcase-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 9l5 5h-3v4h-4v-4H7zm-2-7h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2zM4 8v11h16V8z"></svg:path>`,
})
export class MdiBriefcaseUploadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
