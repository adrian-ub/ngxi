import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsVideoIcon],svg[proicons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="13.5" height="12" x="2.75" y="6" rx="3.5"></svg:rect><svg:path d="m16.25 9.74l3.554-1.77a1 1 0 0 1 1.446.895v6.268a1 1 0 0 1-1.447.895l-3.553-1.773z"></svg:path></svg:g>`,
})
export class ProiconsVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
