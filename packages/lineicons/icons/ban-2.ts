import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBan2Icon],svg[lineicons-ban-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.001c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 0 1 13.957-6.517L5.483 17.458A8.47 8.47 0 0 1 3.5 12.001m3.044 6.518L18.518 6.545A8.5 8.5 0 0 1 6.544 18.519"></svg:path>`,
})
export class LineiconsBan2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
