import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesSolidIcon],svg[iconoir-keyframes-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path fill="currentColor" fill-rule="evenodd" d="m10.07 5.226l4.342 4.963a2.75 2.75 0 0 1 0 3.622l-4.342 4.963a2.75 2.75 0 0 1-4.14 0L1.588 13.81a2.75 2.75 0 0 1 0-3.622L5.93 5.226a2.75 2.75 0 0 1 4.14 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13 19l4.884-5.698a2 2 0 0 0 0-2.604L13 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17 19l4.884-5.698a2 2 0 0 0 0-2.604L17 5"></svg:path></svg:g>`,
})
export class IconoirKeyframesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
