import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNewStickyNoteSolidIcon],svg[streamline-new-sticky-note-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.375 14H1.5A1.5 1.5 0 0 1 0 12.5v-11A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v6.875H9A.625.625 0 0 0 8.375 9zm1.25-.625l3.75-3.75h-3.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNewStickyNoteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
