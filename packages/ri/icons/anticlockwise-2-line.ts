import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAnticlockwise2LineIcon],svg[ri-anticlockwise-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.414 6l1.829 1.828l-1.415 1.415L9.586 5L13.828.757l1.415 1.415L13.414 4H16a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3zM15 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-2 1H5v8h8z"></svg:path>`,
})
export class RiAnticlockwise2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
