import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLayout26Icon],svg[lineicons-layout-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.773 2.75a.75.75 0 1 0-1.5 0V4.5h-5.25V2.75a.75.75 0 0 0-1.5 0V4.5h-1.75a.75.75 0 1 0 0 1.5h1.75v5.25h-1.75a.75.75 0 0 0 0 1.5h1.75V18h-1.75a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V19.5h5.25v1.75a.75.75 0 0 0 1.5 0V19.5h5.25v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 1 0 0-1.5h-1.75v-5.25h1.75a.75.75 0 1 0 0-1.5h-1.75V6h1.75a.75.75 0 1 0 0-1.5h-1.75V2.75a.75.75 0 1 0-1.5 0V4.5h-5.25zM18.023 18h-5.25v-5.25h5.25zm-6.75 0h-5.25v-5.25h5.25zm-5.25-6.75V6h5.25v5.25zm12 0h-5.25V6h5.25z"></svg:path>`,
})
export class LineiconsLayout26Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
