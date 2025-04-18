import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHardDriveIcon],svg[proicons-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 16.75v2.5a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-2.5m18.5 0a2 2 0 0 0-2-2H4.75a2 2 0 0 0-2 2m18.5 0v-1.63a3 3 0 0 0-.09-.728l-2.342-9.37a3 3 0 0 0-2.91-2.272H8.092a3 3 0 0 0-2.91 2.272l-2.342 9.37a3 3 0 0 0-.09.727v1.631"></svg:path><svg:circle cx="18" cy="18" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsHardDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
