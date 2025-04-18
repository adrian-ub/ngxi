import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPanIcon],svg[mdi-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5L8 7h8zM7 8l-4.5 4L7 16zm10 0v8l4.5-4zm-5 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-4 7l4 4.5l4-4.5z"></svg:path>`,
})
export class MdiPanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
