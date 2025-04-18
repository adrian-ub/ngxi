import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRulerIcon],svg[fa6-solid-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0l-92.1-92.2c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48l41.4-41.4l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48l41.4-41.4l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48l41.4-41.4l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48L333.9 18C352.6-.7 383-.7 401.8 18l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9z"></svg:path>`,
})
export class Fa6SolidRulerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
