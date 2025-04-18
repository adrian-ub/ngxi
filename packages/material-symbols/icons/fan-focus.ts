import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFanFocusIcon],svg[material-symbols-fan-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l-3.5-3.5l1.4-1.4l1.1 1.075V12h2v6.175l1.1-1.075l1.4 1.4zm-6-4l-3.5-3.5l1.4-1.4L5 14.175V8h2v6.175L8.1 13.1l1.4 1.4zm12 0l-3.5-3.5l1.4-1.4l1.1 1.075V8h2v6.175l1.1-1.075l1.4 1.4zM2 11V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v6h-2V5H4v6z"></svg:path>`,
})
export class MaterialSymbolsFanFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
