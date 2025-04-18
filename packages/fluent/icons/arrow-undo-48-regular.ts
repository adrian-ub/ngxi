import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUndo48RegularIcon],svg[fluent-arrow-undo-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.795 9.84c-4.174-4.602-11.303-4.505-15.855.67l-.017.02l-8.558 8.958h12.38a1.25 1.25 0 0 1 0 2.5H8.198c-.69 0-1.25-.56-1.25-1.25V5.268a1.25 1.25 0 0 1 2.5 0v12.606l8.631-9.035c5.45-6.174 14.307-6.478 19.567-.679c5.24 5.778 3.622 13.316-.014 17.195l-.01.01l-8.978 9.173l-.005.005l-8.75 8.837l-.005.004l-.25.25a1.25 1.25 0 1 1-1.768-1.767l.246-.246l.005-.005l8.74-8.827l.005-.005l8.955-9.148c2.919-3.124 4.172-9.17-.023-13.796"></svg:path>`,
})
export class FluentArrowUndo48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
