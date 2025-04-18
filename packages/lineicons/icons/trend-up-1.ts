import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrendUp1Icon],svg[lineicons-trend-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 4a.75.75 0 0 0-1.5 0v14.5a2.25 2.25 0 0 0 2.25 2.25H20a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 1-.75-.75v-2.77l4.45-4.45l3.422 3.423a.75.75 0 0 0 1.06 0l4.315-4.315v1.729a.75.75 0 1 0 1.5 0V8.58a.75.75 0 0 0-.75-.75h-3.536a.75.75 0 0 0 0 1.5h1.722l-3.78 3.78L9.73 9.69a.75.75 0 0 0-1.06 0l-3.92 3.92z"></svg:path>`,
})
export class LineiconsTrendUp1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
