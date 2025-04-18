import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8Checked2Icon],svg[icons8-checked-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v24h24V12.187l-2 2V26H6V6h19.813l2-2zm23.28 3.28L16 18.563l-4.28-4.28l-1.44 1.437l5 5l.72.686l.72-.687l12-12l-1.44-1.44z"></svg:path>`,
})
export class Icons8Checked2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
