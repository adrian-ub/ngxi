import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight30fpsSharpIcon],svg[material-symbols-light-30fps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.885 18.116v-1.231h6v-4.27h-6v-1.23h6v-4.27h-6v-1.23h7.23v5.5L9.5 12l.616.616v5.5zm11.23-1.231h5.77v-9.77h-5.77zm-1.23 1.23V5.886h8.23v12.23z"></svg:path>`,
})
export class MaterialSymbolsLight30fpsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
