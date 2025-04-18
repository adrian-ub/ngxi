import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPencilFIcon],svg[jam-pencil-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.318 6.11l-3.536-3.535l1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829zm-1.414 1.415l-9.9 9.9l-4.596 1.06l1.06-4.596l9.9-9.9z"></svg:path>`,
})
export class JamPencilFIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
