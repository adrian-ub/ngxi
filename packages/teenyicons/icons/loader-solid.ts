import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLoaderSolidIcon],svg[teenyicons-loader-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 .5V5H7V.5zM5.146 5.854l-3-3l.708-.708l3 3zm4-.708l3-3l.708.708l-3 3zm.855 1.849L14.5 7l-.002 1l-4.5-.006zm-9.501 0H5v1H.5zm5.354 2.859l-3 3l-.708-.708l3-3zm6.292 3l-3-3l.708-.708l3 3zM8 10v4.5H7V10z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLoaderSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
