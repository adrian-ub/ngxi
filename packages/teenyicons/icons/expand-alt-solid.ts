import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsExpandAltSolidIcon],svg[teenyicons-expand-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.293 2H10V1h4v4h-1V2.707L9.854 5.854l-.708-.708zm-6.44 7.854L2.708 13H5v1H1v-4h1v2.293l3.146-3.147z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsExpandAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
