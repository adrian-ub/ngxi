import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer10SharpIcon],svg[material-symbols-light-timer-10-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.827 16.885h4.77v-9.77h-4.77zm-1.23 1.23V5.886h7.23v12.23zm-4 0v-11H5.191v-1.23h3.635v12.23z"></svg:path>`,
})
export class MaterialSymbolsLightTimer10SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
