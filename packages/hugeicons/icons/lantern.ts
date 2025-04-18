import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLanternIcon],svg[hugeicons-lantern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 7.5h12v11H6zm0 0C6.717 5.41 8.729 4 10.995 4h2.01C15.271 4 17.283 5.41 18 7.5zm12 11c-.717 2.09-2.729 3.5-4.995 3.5h-2.01C8.729 22 6.717 20.59 6 18.5zM6 7.5H5l1 1m12-1h1l-1 1m0 10h1l-1-1m-12 1H5l1-1M21 11l1-.5M21 15l1 .5M3 11l-1-.5M3 15l-1 .5M12 12v2m0-12v2" color="currentColor"></svg:path>`,
})
export class HugeiconsLanternIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
