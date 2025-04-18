import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCubeUnfoldedIcon],svg[mdi-cube-unfolded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9V4h7v5h10v7h-5v5h-7v-5H1V9zm10 7h-3v3h3zM8 9h3V6H8zm-2 5v-3H3v3zm12-3v3h3v-3zm-5 0v3h3v-3zm-5 0v3h3v-3z"></svg:path>`,
})
export class MdiCubeUnfoldedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
