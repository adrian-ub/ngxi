import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiIcePopIcon],svg[mdi-ice-pop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.15 14.96l-8.2 3.69l-4.1-9a3.6 3.6 0 0 0 2.3-3.29c-.01-1.36-.79-2.6-2-3.21c.39-.35.85-.65 1.3-.9c2.26-1 4.92-.02 6 2.21m-.3 13.9l1.6 3.5l2.7-1.21l-1.6-3.5"></svg:path>`,
})
export class MdiIcePopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
