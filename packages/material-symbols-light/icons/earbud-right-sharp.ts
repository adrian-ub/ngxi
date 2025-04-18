import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarbudRightSharpIcon],svg[material-symbols-light-earbud-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.442 21V5H20v6.673h-2.788V21zm-3.48-7.327q-2.116 0-3.539-1.586T4 8.327t1.423-3.75T8.961 3h.731v10.673z"></svg:path>`,
})
export class MaterialSymbolsLightEarbudRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
