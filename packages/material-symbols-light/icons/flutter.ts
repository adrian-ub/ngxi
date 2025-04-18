import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlutterIcon],svg[material-symbols-light-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.746 14.856L3.866 12l9.307-9.308h5.737zm6.427 6.452l-5.021-5.021l5.021-5.002h5.737l-5.021 5.002l5.02 5.02z"></svg:path>`,
})
export class MaterialSymbolsLightFlutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
