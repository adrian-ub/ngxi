import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeselectIcon],svg[material-symbols-light-deselect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.833 21.254l-4.946-4.946H7.692V9.114L2.746 4.167l.708-.713l17.092 17.092zm-11.14-5.946h5.194l-5.195-5.194zm7.615-1.825l-1-1v-3.79h-3.79l-1-1h5.79zM5.23 18.769V20q-.508 0-.87-.362T4 18.77zM4 16.308v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zm3.692 11.078v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zm0-3.692V4q.508 0 .87.362T20 5.23z"></svg:path>`,
})
export class MaterialSymbolsLightDeselectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
