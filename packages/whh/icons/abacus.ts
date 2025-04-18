import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAbacusIcon],svg[whh-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.268 512h-35q-10 64-61 64t-61-64h-134q-10 64-61 64t-61-64h-198q-10 64-61 64t-61-64h-70q-10 64-61 64t-61-64h-35q-13 0-22.5-9.5T.268 480t9.5-22.5t22.5-9.5h35q10-64 61-64t61 64h70q10-64 61-64t61 64h198q10-64 61-64t61 64h134q10-64 61-64t61 64h35q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-384h-35q-10 64-61 64t-61-64h-262q-10 64-61 64t-61-64h-70q-10 64-61 64t-61-64h-70q-10 64-61 64t-61-64h-35q-13 0-22.5-9.5T.268 96t9.5-22.5t22.5-9.5h35q10-64 61-64t61 64h70q10-64 61-64t61 64h70q10-64 61-64t61 64h262q10-64 61-64t61 64h35q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-960 704h355q10-64 61-64t61 64h134q10-64 61-64t61 64h70q10-64 61-64t61 64h35q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-35q-10 64-61 64t-61-64h-70q-10 64-61 64t-61-64h-134q-10 64-61 64t-61-64h-355q-13 0-22.5-9.5T.268 864t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhAbacusIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
