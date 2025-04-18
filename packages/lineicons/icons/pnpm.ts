import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPnpmIcon],svg[lineicons-pnpm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8.626h-5.625V3H21zm-6.188 0H9.187V3h5.625zm-6.187 0H3V3h5.625zM21 14.813h-5.625V9.188H21zm-6.188 0H9.187V9.188h5.625zm0 6.187H9.187v-5.625h5.625zM21 21h-5.625v-5.625H21zM8.625 21H3v-5.625h5.625z"></svg:path>`,
})
export class LineiconsPnpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
