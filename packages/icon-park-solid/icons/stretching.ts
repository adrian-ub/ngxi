import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStretchingIcon],svg[icon-park-solid-stretching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSStretching0"><svg:g fill="none"><svg:g stroke="#fff" stroke-width="4" clip-path="url(#ipSStretching1)"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V25"></svg:path><svg:path stroke-linecap="round" d="M24.001 16v8M42 6v8m-9.999 10h-8"></svg:path><svg:path d="M42 6L24 24"></svg:path><svg:path stroke-linecap="round" d="M42 6h-8"></svg:path></svg:g><svg:defs><svg:clippath id="ipSStretching1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStretching0)"></svg:path>`,
})
export class IconParkSolidStretchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
