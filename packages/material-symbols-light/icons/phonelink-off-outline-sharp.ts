import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhonelinkOffOutlineSharpIcon],svg[material-symbols-light-phonelink-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.83 6l-1-1H20v1zm12.19 12.154l-1-1v-7.77h-4.77v3.035l-1-1V8.385h6.77zm-1.086 3.215L17.566 19H14.25v-3.315L6 7.435V17.5h5.48V19H3v-1.5h2V6.435L2.766 4.2l.707-.708l17.17 17.17zm-2.3-6.582"></svg:path>`,
})
export class MaterialSymbolsLightPhonelinkOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
