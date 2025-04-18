import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleThinIcon],svg[ph-user-rectangle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M66 204a68 68 0 0 1 124 0Zm154-4a4 4 0 0 1-4 4h-17.33a76.17 76.17 0 0 0-50.06-45.14a44 44 0 1 0-41.22 0A76.17 76.17 0 0 0 57.33 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-92-44a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhUserRectangleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
