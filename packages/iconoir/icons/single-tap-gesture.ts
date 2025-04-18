import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSingleTapGestureIcon],svg[iconoir-single-tap-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 20.5a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path><svg:path d="M4 7.29C5.496 5.039 8.517 3.5 12 3.5s6.504 1.539 8 3.79"></svg:path></svg:g>`,
})
export class IconoirSingleTapGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
