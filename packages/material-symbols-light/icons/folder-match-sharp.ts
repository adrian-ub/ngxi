import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderMatchSharpIcon],svg[material-symbols-light-folder-match-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.116 18.38q-1.641-.741-2.713-2.165T5.075 13h1.006q.225 1.364 1.023 2.483t2.011 1.794zM11.5 21v-7.615h3.577L16 14.808h5V21zM3 10.616V3h3.577L7.5 4.423h5v6.193zM18 12q0-1.664-.829-3.07q-.829-1.407-2.286-2.188V5.658q1.91.81 3.012 2.543T19 12z"></svg:path>`,
})
export class MaterialSymbolsLightFolderMatchSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
