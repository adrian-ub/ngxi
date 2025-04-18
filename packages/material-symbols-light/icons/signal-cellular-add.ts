import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularAddIcon],svg[material-symbols-light-signal-cellular-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 21v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3 21L20.994 3.006v8.933q-.386-.17-.976-.27T19 11.566q-2.47 0-4.201 1.732q-1.732 1.731-1.732 4.201q0 .939.299 1.84q.298.9.855 1.66z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
