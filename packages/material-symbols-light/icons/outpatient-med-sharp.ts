import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOutpatientMedSharpIcon],svg[material-symbols-light-outpatient-med-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.346 14.808l-.713-.708l1.6-1.6h-3.867v-.98h3.861l-1.594-1.576l.733-.733L22.154 12zM2.866 5.23v-1h10v1zM6.75 17.116h2.23v-2.5h2.5v-2.231h-2.5v-2.5H6.75v2.5h-2.5v2.23h2.5zM1.866 20V7h12v13z"></svg:path>`,
})
export class MaterialSymbolsLightOutpatientMedSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
