import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEjectIcon],svg[streamline-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 11.5h11m-1.293-3H2.793c-.873 0-1.327-1.04-.733-1.68l4.207-4.53a1 1 0 0 1 1.466 0l4.207 4.53c.594.64.14 1.68-.733 1.68"></svg:path>`,
})
export class StreamlineEjectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
