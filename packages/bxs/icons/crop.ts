import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCropIcon],svg[bxs-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7.5C19 6.121 17.879 5 16.5 5H8V2H5v3H2v3h14v14h3v-3h3v-3h-3z"></svg:path><svg:path fill="currentColor" d="M8 10H5v6.5C5 17.879 6.121 19 7.5 19H14v-3H8z"></svg:path>`,
})
export class BxsCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
