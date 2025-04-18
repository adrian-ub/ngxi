import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileOffIcon],svg[material-symbols-mobile-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L.7 3.5l1.4-1.4l19.8 19.8zM5 6.425l2 2V18h9.6l2.4 2.4v.6q0 .825-.587 1.413T17 23H7q-.825 0-1.412-.587T5 21zM8.825 6L5.15 2.3q.25-.575.738-.937T7 1h10q.825 0 1.413.588T19 3v13.15l-2-2V6z"></svg:path>`,
})
export class MaterialSymbolsMobileOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
