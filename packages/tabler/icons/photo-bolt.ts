import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoBoltIcon],svg[tabler-photo-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h.01M13.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5"></svg:path><svg:path d="m3 16l5-5c.928-.893 2.072-.893 3 0l4 4"></svg:path><svg:path d="m14 14l1-1c.669-.643 1.45-.823 2.18-.54M19 16l-2 3h4l-2 3"></svg:path></svg:g>`,
})
export class TablerPhotoBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
