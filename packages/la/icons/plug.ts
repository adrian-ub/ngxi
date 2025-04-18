import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPlugIcon],svg[la-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 3.594l-4 3.969l-2.281-2.282L14.28 6.72l.75.75l-5.125 5.125a3.126 3.126 0 0 0 0 4.406l1.844 1.844l-7.469 7.437l1.44 1.438l7.437-7.469L15 22.094a3.126 3.126 0 0 0 4.406 0l5.125-5.125l.75.75l1.438-1.438L24.437 14l3.97-4L27 8.594l-4 3.969L19.437 9l3.97-4zm-5.563 5.281l6.688 6.688L18 20.686c-.387.387-1.207.387-1.594 0l-5.093-5.093c-.387-.387-.387-1.207 0-1.594z"></svg:path>`,
})
export class LaPlugIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
