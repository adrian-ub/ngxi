import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineQuotation2SolidIcon],svg[streamline-quotation-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.49 3.877a.75.75 0 1 0-1.48.246l.5 3a.75.75 0 0 0 1.48-.246zm2.5 0a.75.75 0 1 0-1.48.246l.5 3a.75.75 0 0 0 1.48-.246zm7.133 2.383a.75.75 0 0 1 .617.863l-.5 3a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .863-.617m2.867.863a.75.75 0 1 0-1.48-.246l-.5 3a.75.75 0 1 0 1.48.246z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineQuotation2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
