import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsInformationCircleSharpIcon],svg[famicons-information-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200s200-89.72 200-200S366.28 56 256 56m0 82a26 26 0 1 1-26 26a26 26 0 0 1 26-26m64 226H200v-32h44v-88h-32v-32h64v120h44Z"></svg:path>`,
})
export class FamiconsInformationCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
