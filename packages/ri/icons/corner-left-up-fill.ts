import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerLeftUpFillIcon],svg[ri-corner-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19h9v-2h-7V9.414h5.414L11 3L4.586 9.414H10z"></svg:path>`,
})
export class RiCornerLeftUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
