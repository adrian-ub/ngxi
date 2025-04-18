import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed17xSharpIcon],svg[material-symbols-light-speed-1-7x-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 16.5v-1h1v1zm-2.385 0v-8H2.423v-1h2.808v9zm10.615 0l2.808-4.692L15.077 7.5h1.115l2.02 3.383L20.23 7.5h1.077l-2.558 4.27l2.827 4.73h-1.115l-2.27-3.786l-2.269 3.786zm-4.634 0l2-8H8.25v-1h5v1.07l-2 7.93z"></svg:path>`,
})
export class MaterialSymbolsLightSpeed17xSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
