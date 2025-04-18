import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArchiveBoxSolidIcon],svg[streamline-archive-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 2A1.5 1.5 0 0 1 1.5.5h11A1.5 1.5 0 0 1 14 2v1.5A1.5 1.5 0 0 1 12.5 5h-11A1.5 1.5 0 0 1 0 3.5zm13 4.25H1V12a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 13 12zM5.5 7.875a.625.625 0 1 0 0 1.25h3a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineArchiveBoxSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
