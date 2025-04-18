import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSqueegeeIcon],svg[mdi-squeegee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v3H2V2zM2 8h5l2 2h1v10a2 2 0 0 0 2 2a2 2 0 0 0 2-2V10h1l2-2h5V6H2z"></svg:path>`,
})
export class MdiSqueegeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
