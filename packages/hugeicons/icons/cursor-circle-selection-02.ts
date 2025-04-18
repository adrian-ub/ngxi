import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorCircleSelection02Icon],svg[hugeicons-cursor-circle-selection-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.31 9.378C10.8 7.773 22.01 11.705 22 13.14c-.01 1.628-4.378 2.128-5.588 2.468c-.728.204-.923.414-1.09 1.177c-.761 3.457-1.143 5.176-2.012 5.215c-1.387.061-5.455-11.055-4-12.622m10.368-1.726q.184.441.322.903m-1.937-3.47a9.2 9.2 0 0 0-2.422-1.94m-2.92-1.02a9.4 9.4 0 0 0-3.35.053M6.084 3.545a9.2 9.2 0 0 0-2.545 2.549M2.175 9.386a9.4 9.4 0 0 0-.046 3.361m1.015 2.894c.5.9 1.146 1.708 1.906 2.391m2.614 1.651q.434.18.89.317" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorCircleSelection02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
