import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSyphonIcon],svg[arcticons-syphon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M40.1 16.5v13.4c0 1.2-.6 2.3-1.7 2.9l-11.6 6.7M14 9.8L22.4 5c1-.6 2.3-.6 3.3 0l11.4 6.6M21.2 39.5L8.1 32"></svg:path><svg:path d="M32.8 28.9L25 33.4c-.6.4-1.4.4-2 0l-7.8-4.5c-.6-.4-1-1-1-1.8V18c0-.7.4-1.4 1-1.8l7.8-4.5c.6-.4 1.4-.4 2 0l7.8 4.5c.6.4 1 1 1 1.8v9.1c.1.7-.3 1.4-1 1.8"></svg:path><svg:path d="M7.9 13.5v30l13.3-2"></svg:path></svg:g>`,
})
export class ArcticonsSyphonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
