import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMessage2ShareIcon],svg[tabler-message-2-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 9h8m-8 4h6m-2 8l-3-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6m-5 9l5-5"></svg:path><svg:path d="M21 21.5V17h-4.5"></svg:path></svg:g>`,
})
export class TablerMessage2ShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
