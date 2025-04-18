import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLoaderOutlineIcon],svg[teenyicons-loader-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1V.5H7V1zM7 4.5V5h1v-.5zm1 6V10H7v.5zM7 14v.5h1V14zM4.5 7.995H5v-1h-.5zm-3.5-1H.5v1H1zM14 8h.5V7H14zm-3.5-1.005H10v1h.5zM7 1v3.5h1V1zm0 9.5V14h1v-3.5zM4.5 6.995H1v1h3.5zM14 7l-3.5-.005v1L14 8zM2.147 2.854l3 3l.708-.708l-3-3zm10-.708l-3 3l.708.708l3-3zM2.854 12.854l3-3l-.708-.708l-3 3zm6.292-3l3 3l.708-.708l-3-3z"></svg:path>`,
})
export class TeenyiconsLoaderOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
