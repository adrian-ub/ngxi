import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRewindOutlineIcon],svg[mdi-rewind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.9L7 12l3 2.1zm9 0L16 12l3 2.1zM12 6v12l-8.5-6zm9 0v12l-8.5-6z"></svg:path>`,
})
export class MdiRewindOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
