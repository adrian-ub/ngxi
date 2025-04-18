import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertSideIcon],svg[streamline-insert-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H8m5.5 3H8m5.5 3H8m5.5 6H8m5.5-3H8M.5 1.5v4A.5.5 0 0 0 1 6h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 5 1H1a.5.5 0 0 0-.5.5m0 7v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 5 8H1a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class StreamlineInsertSideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
