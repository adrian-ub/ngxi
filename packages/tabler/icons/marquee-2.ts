import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMarquee2Icon],svg[tabler-marquee-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6V5a1 1 0 0 1 1-1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1-1 1h-1m-5 0h-2m-5 0H5a1 1 0 0 1-1-1v-1m0-5v-2"></svg:path>`,
})
export class TablerMarquee2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
