import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMouseIcon],svg[material-symbols-light-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 21q-2.506 0-4.255-1.747Q6 17.508 6 15v-4.923h12V15q0 2.507-1.745 4.254T12.004 21M6 9.077q0-2.356 1.575-4.078T11.5 3.094v5.983zm6.5 0V3.094q2.35.183 3.925 1.905T18 9.077z"></svg:path>`,
})
export class MaterialSymbolsLightMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
