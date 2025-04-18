import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTransitionDownIcon],svg[iconoir-transition-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 2H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 16v2a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-2m-9-6v8m0 0l-3-3m3 3l3-3"></svg:path></svg:g>`,
})
export class IconoirTransitionDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
