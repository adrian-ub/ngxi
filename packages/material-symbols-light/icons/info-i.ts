import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInfoIIcon],svg[material-symbols-light-info-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q-.633 0-1.066-.434Q10.5 6.133 10.5 5.5t.434-1.066Q11.367 4 12 4t1.066.434T13.5 5.5t-.434 1.066Q12.633 7 12 7m-1 13V9.77h2V20z"></svg:path>`,
})
export class MaterialSymbolsLightInfoIIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
