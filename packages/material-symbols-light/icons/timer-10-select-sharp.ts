import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer10SelectSharpIcon],svg[material-symbols-light-timer-10-select-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.923 16.885h4.77v-9.77h-4.77zm-1.23 1.23V5.886h7.23v12.23zm-4 0v-11h-2v-1.23h3.23v12.23zm13.615 0v-1h4v-2h-4v-4h5v1h-4v2h4v4z"></svg:path>`,
})
export class MaterialSymbolsLightTimer10SelectSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
