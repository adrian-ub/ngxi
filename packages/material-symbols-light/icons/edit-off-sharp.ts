import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditOffSharpIcon],svg[material-symbols-light-edit-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.685 11.829L12.17 9.315l5.723-5.742l2.527 2.544zm5.077 9.348l-7.21-7.185L6.519 20H4v-2.513l6.014-6.033l-7.191-7.215l.714-.714l16.938 16.938zM17.504 7.589L19 6.111L17.889 5l-1.477 1.496z"></svg:path>`,
})
export class MaterialSymbolsLightEditOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
