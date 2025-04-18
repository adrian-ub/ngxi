import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsCheckmarkDoneSharpIcon],svg[famicons-checkmark-done-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="44" d="M465 127L241 384l-92-92m-9 93l-93-93m316-165L236 273"></svg:path>`,
})
export class FamiconsCheckmarkDoneSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
