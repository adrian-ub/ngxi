import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDrawingIcon],svg[mdi-drawing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 3A5.5 5.5 0 0 1 14 8.5c0 1.33-.47 2.55-1.26 3.5H21v9h-9v-8.26c-.95.79-2.17 1.26-3.5 1.26A5.5 5.5 0 0 1 3 8.5A5.5 5.5 0 0 1 8.5 3"></svg:path>`,
})
export class MdiDrawingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
