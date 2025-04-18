import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderInfoSharpIcon],svg[material-symbols-light-folder-info-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h6.596l2 2H21v5.029q-.846-.685-1.867-1.03t-2.1-.345q-2.66 0-4.53 1.869t-1.869 4.529q0 .512.07.993q.069.48.246.955zm14 2q-1.671 0-2.835-1.164Q13 18.67 13 17t1.165-2.835T17 13t2.836 1.165T21 17t-1.164 2.836T17 21m-.385-1.461h.77V16.46h-.77zM17 15.46q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15t-.35.15t-.15.35t.15.35t.35.15"></svg:path>`,
})
export class MaterialSymbolsLightFolderInfoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
