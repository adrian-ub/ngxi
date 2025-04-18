import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonVolumeDownFillIcon],svg[iconamoon-volume-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.427 5.054c1.15-.816 2.828-.217 3.083 1.25c.322 1.85.49 3.754.49 5.696s-.168 3.845-.49 5.697c-.255 1.466-1.932 2.065-3.083 1.25L7.94 17.183A1 1 0 0 0 7.363 17H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h2.363a1 1 0 0 0 .578-.184zm7.446 3.864a1 1 0 1 0-1.993.164a35.5 35.5 0 0 1 0 5.836a1 1 0 0 0 1.993.164a37.5 37.5 0 0 0 0-6.164" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonVolumeDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
