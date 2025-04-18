import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabIceSkateIcon],svg[lucide-lab-ice-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 2v9m0-4L8 8m3-5L4 5v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a3.08 3.08 0 0 0-1.8-2.8L11 11l-3 1m-1 6v4m8-4v4M4 22h12c2.1 0 3.9-1.1 5-2.7"></svg:path>`,
})
export class LucideLabIceSkateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
