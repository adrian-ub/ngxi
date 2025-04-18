import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCapsuleIcon],svg[lineicons-capsule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 62.2c-4.9 0-9.8-1.9-13.5-5.6c-3.7-3.6-5.6-8.4-5.6-13.5s2-9.9 5.6-13.5L29.6 7.4c3.6-3.6 8.4-5.6 13.5-5.6s9.9 2 13.5 5.6c7.5 7.5 7.5 19.6 0 27.1L34.4 56.6c-3.7 3.8-8.6 5.6-13.5 5.6m-.9-39l-9.5 9.5c-2.8 2.8-4.3 6.4-4.3 10.4c0 3.9 1.5 7.6 4.3 10.4s6.4 4.3 10.4 4.3c3.9 0 7.6-1.5 10.4-4.3l9.5-9.5zm3.2-3.2L44 40.8l9.5-9.5c2.8-2.8 4.3-6.4 4.3-10.4c0-3.9-1.5-7.6-4.3-10.4S47 6.2 43.1 6.2s-7.6 1.5-10.4 4.3z"></svg:path>`,
})
export class LineiconsCapsuleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
