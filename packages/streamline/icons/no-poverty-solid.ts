import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNoPovertySolidIcon],svg[streamline-no-poverty-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.164 4.462a1.715 1.715 0 1 0 0-3.431a1.715 1.715 0 0 0 0 3.43Zm7.672 0a1.715 1.715 0 1 0 0-3.431a1.715 1.715 0 0 0 0 3.43Zm0 .357a3.06 3.06 0 0 0-1.898.656a2.96 2.96 0 0 1 .95 2.917h3.521a.5.5 0 0 0 .5-.5a3.073 3.073 0 0 0-3.073-3.073m-7.672 0a3.06 3.06 0 0 1 1.898.656a2.96 2.96 0 0 0-.95 2.917H.59a.5.5 0 0 1-.5-.5A3.073 3.073 0 0 1 3.164 4.82ZM7 9.435a1.715 1.715 0 1 0 0-3.43a1.715 1.715 0 0 0 0 3.43m-3.073 3.43a3.073 3.073 0 1 1 6.146 0a.5.5 0 0 1-.5.5H4.427a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNoPovertySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
