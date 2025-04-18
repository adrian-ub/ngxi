import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightCamcorderIcon],svg[mdi-light-camcorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h9a2 2 0 0 1 2 2v2.5l4-4v10l-4-4V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm14 1.91l-2.59 2.59L19 15.09z"></svg:path>`,
})
export class MdiLightCamcorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
