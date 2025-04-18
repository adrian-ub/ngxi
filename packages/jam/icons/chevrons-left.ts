import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamChevronsLeftIcon],svg[jam-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.828 7.071l4.95 4.95a1 1 0 1 1-1.414 1.414L6.707 7.778a1 1 0 0 1 0-1.414L12.364.707a1 1 0 0 1 1.414 1.414zm-6 0l4.95 4.95a1 1 0 1 1-1.414 1.414L.707 7.778a1 1 0 0 1 0-1.414L6.364.707a1 1 0 1 1 1.414 1.414z"></svg:path>`,
})
export class JamChevronsLeftIcon {
  readonly viewBox = input("-4.5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
