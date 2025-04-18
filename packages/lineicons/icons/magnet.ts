import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMagnetIcon],svg[lineicons-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 5.501A2.25 2.25 0 0 1 6 3.251h2a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 0 4.5 0v-6.5A2.25 2.25 0 0 1 17 3.251h2a2.25 2.25 0 0 1 2.25 2.25v6.5a8.75 8.75 0 1 1-17.5 0zM6 4.751a.75.75 0 0 0-.75.75v2.25h3.5v-2.25a.75.75 0 0 0-.75-.75zm-.75 7.25a7.25 7.25 0 0 0 14.5 0v-2.75h-3.5v2.75a3.75 3.75 0 0 1-7.5 0v-2.75h-3.5zm14.5-4.25v-2.25a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0-.75.75v2.25z"></svg:path>`,
})
export class LineiconsMagnetIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
