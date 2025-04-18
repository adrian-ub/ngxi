import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTapeCassetteRecordIcon],svg[streamline-tape-cassette-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:path d="M4.5 9.5h5l1 2.5h-7zm-2-3.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v0c0 .69-.56 1.25-1.25 1.25h-6.5C3.06 7 2.5 6.44 2.5 5.75"></svg:path><svg:path d="M4.833 4.5a1.5 1.5 0 0 1 0 2.5m4.334-2.5a1.5 1.5 0 0 0 0 2.5"></svg:path></svg:g>`,
})
export class StreamlineTapeCassetteRecordIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
