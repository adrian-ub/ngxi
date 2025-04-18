import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirlinesOutlineIcon],svg[material-symbols-light-airlines-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.954 18h12.435l2.403-12h-5.967zM3 19L13.289 5h7.73l-2.807 14zm11.289-5.616q.799 0 1.351-.544t.552-1.333t-.552-1.34t-1.351-.552q-.784 0-1.325.549t-.541 1.342t.541 1.336t1.325.542M4.954 18h12.435z"></svg:path>`,
})
export class MaterialSymbolsLightAirlinesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
