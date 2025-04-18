import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPencilPlusIcon],svg[mdi-pencil-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9M3 17.2V21h3.8l11-11.1l-3.7-3.8zM7 2v3h3v2H7v3H5V7H2V5h3V2z"></svg:path>`,
})
export class MdiPencilPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
