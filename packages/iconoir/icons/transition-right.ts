import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTransitionRightIcon],svg[iconoir-transition-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 18V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 3h2a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2m-6-9h8m0 0l-3-3m3 3l-3 3"></svg:path></svg:g>`,
})
export class IconoirTransitionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
