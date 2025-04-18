import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularAddOutlineIcon],svg[material-symbols-light-signal-cellular-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21L20.994 3.006v8.933q-.238-.103-.478-.16q-.241-.056-.522-.117V5.427L5.421 20h8.221q.124.287.26.527q.137.24.32.473zm15.5 0v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5.421 20L19.994 5.427l-4.056 4.057l-3.372 3.37l-3.289 3.29z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
