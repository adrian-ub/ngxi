import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolder2FillIcon],svg[ri-folder-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9zm0-2H2V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiFolder2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
