import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePenToolSolidIcon],svg[streamline-pen-tool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.308.922L6.75 3q.07.053.134.116l4 4q.063.063.116.134l2.078-1.558a1 1 0 0 0 .107-1.507L9.815.815a1 1 0 0 0-1.507.107M1.381 5.254L.166 12.95L3.116 10l-.308-.308a.625.625 0 0 1 .884-.884l1.5 1.5a.625.625 0 0 1-.884.884L4 10.884l-2.95 2.95l7.696-1.215a1 1 0 0 0 .838-.877L10 8L6 4l-3.742.416a1 1 0 0 0-.877.838" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePenToolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
