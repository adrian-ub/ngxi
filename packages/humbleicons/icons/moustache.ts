import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsMoustacheIcon],svg[humbleicons-moustache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.57c-4 1.733-4-4.767-9-1.767c-5-3-5 3.5-9 1.767c1 4.233 6 4.233 9 1.233c3 3 8 3 9-1.233"></svg:path>`,
})
export class HumbleiconsMoustacheIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
