import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTransitionUpIcon],svg[iconoir-transition-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 22H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 8V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2m-9 6V6m0 0L9 9m3-3l3 3"></svg:path></svg:g>`,
})
export class IconoirTransitionUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
