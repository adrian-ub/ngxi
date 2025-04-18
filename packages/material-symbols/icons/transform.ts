import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTransformIcon],svg[material-symbols-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 23l-4-4l1.4-1.45l1.6 1.6V17H9q-.825 0-1.412-.587T7 15V9H2V7h5V4.85l-1.6 1.6L4 5l4-4l4 4l-1.4 1.45L9 4.85V15h13v2h-5v2.15l1.6-1.6L20 19zm-1-10V9h-4V7h4q.825 0 1.413.588T17 9v4z"></svg:path>`,
})
export class MaterialSymbolsTransformIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
