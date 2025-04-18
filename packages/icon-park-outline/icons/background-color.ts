import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBackgroundColorIcon],svg[icon-park-outline-background-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M37 37a4 4 0 0 0 4-4q0-2.21-4-6q-4 3.79-4 6a4 4 0 0 0 4 4" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="m20.854 5.504l3.535 3.536"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M23.682 8.333L8.125 23.889L19.44 35.203l15.557-15.557z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="m12 20.073l16.961 5.577M4 43h40"></svg:path></svg:g>`,
})
export class IconParkOutlineBackgroundColorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
