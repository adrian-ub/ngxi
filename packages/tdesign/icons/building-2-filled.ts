import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBuilding2FilledIcon],svg[tdesign-building-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .834l6.373 3.823l-1.03 1.715l-.342-.206V8H7V6.166l-.343.206l-1.03-1.715zm-1 3.164v2.004h2.004V3.998zM22 10H2v12h6v-7h8v7h6z"></svg:path><svg:path fill="currentColor" d="M10 17v5h4v-5z"></svg:path>`,
})
export class TdesignBuilding2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
