import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fePencilIcon],svg[fe-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 18L15 6l3 3L6 21H3zM16 5l2-2l3 3l-2.001 2.001z"></svg:path>`,
})
export class FePencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
