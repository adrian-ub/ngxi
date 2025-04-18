import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhExcludeshapeIcon],svg[whh-excludeshape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-512q-53 0-90.5-37.5t-37.5-90.5V768h-128q-53 0-90.5-37.5T.428 640V128q0-53 37.5-90.5t90.5-37.5h512q53 0 90.5 37.5t37.5 90.5v128h128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m-256-640h-224q-13 0-22.5 9.5t-9.5 22.5v224h224q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhExcludeshapeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
