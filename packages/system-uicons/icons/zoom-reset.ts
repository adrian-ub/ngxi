import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsZoomResetIcon],svg[system-uicons-zoom-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 8.5a5 5 0 1 0 1.057-3.074"></svg:path><svg:path d="M4.5 1.5v4h4m9 12l-5.379-5.379"></svg:path></svg:g>`,
})
export class SystemUiconsZoomResetIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
