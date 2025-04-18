import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirOpenInBrowserIcon],svg[iconoir-open-in-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 21h12.4a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6V16m7-10h8M6 6h1M3.5 20.5L12 12m0 0v4m0-4H8"></svg:path>`,
})
export class IconoirOpenInBrowserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
