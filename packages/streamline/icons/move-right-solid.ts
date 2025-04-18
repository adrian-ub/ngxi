import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMoveRightSolidIcon],svg[streamline-move-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14H4a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 4 0zm6 6a1 1 0 0 0 0 2h3v1.5a.5.5 0 0 0 .854.354l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.854.354V6z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMoveRightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
