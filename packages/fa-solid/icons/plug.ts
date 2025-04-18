import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidPlugIcon],svg[fa-solid-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 32a32 32 0 0 0-64 0v96h64Zm48 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h16v32a160.07 160.07 0 0 0 128 156.8V512h64v-99.2A160.07 160.07 0 0 0 352 256v-32h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16M128 32a32 32 0 0 0-64 0v96h64Z"></svg:path>`,
})
export class FaSolidPlugIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
