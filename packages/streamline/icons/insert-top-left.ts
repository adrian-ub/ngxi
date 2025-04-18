import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopLeftIcon],svg[streamline-insert-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H9m4.5 3H9m4.5 3H9m4.5 6H.5m13-3H.5M6 1H1a.5.5 0 0 0-.5.5v5A.5.5 0 0 0 1 7h5a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 6 1"></svg:path>`,
})
export class StreamlineInsertTopLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
