import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBinSolidIcon],svg[teenyicons-bin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3V1.5A1.5 1.5 0 0 0 9.5 0h-4A1.5 1.5 0 0 0 4 1.5V3H0v1h1v9.5A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V4h1V3zM5 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3H5zM7 7v5h1V7zm-3 5V9h1v3zm6-3v3h1V9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBinSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
