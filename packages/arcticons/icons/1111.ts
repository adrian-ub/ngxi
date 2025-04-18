import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1111Icon],svg[arcticons-1111-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.282 17.701L24 14.556v22.872m9.65-21.456h-5.3l4.3-5.4v8M18.282 37.428h11.436"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class Arcticons1111Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
