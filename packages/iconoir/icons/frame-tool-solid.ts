import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameToolSolidIcon],svg[iconoir-frame-tool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 7h1M2 17h1M21 7h1m-1 10h1M17 3V2M7 3V2m10 20v-1M7 22v-1"></svg:path><svg:path fill="currentColor" d="M6 17.4V6.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6v10.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6"></svg:path></svg:g>`,
})
export class IconoirFrameToolSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
