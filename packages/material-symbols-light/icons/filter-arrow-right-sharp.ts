import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterArrowRightSharpIcon],svg[material-symbols-light-filter-arrow-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.73 19v-6.961L3.317 4.98H19.05l-6.415 7.058V19zm9.097-1.115l-.708-.689l1.96-1.908h-4.675v-1h4.675l-1.96-1.907l.708-.708L22 14.788zm-7.635-5.739l5.643-6.165H5.55z"></svg:path>`,
})
export class MaterialSymbolsLightFilterArrowRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
