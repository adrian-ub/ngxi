import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFileJsonSharpIcon],svg[material-symbols-light-file-json-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.558 14.692H6.73l.596-.615v-4.77h-.885v4.559H4.77V12.5h-.827v1.577zm4.31 0h2.115l.596-.615v-1.788l-.596-.597H9.079v-1.557h1.673v.807h.827V9.904l-.596-.596H8.867l-.615.596v1.788l.615.616h1.885v1.558H9.079v-.808h-.827v1.019zm4.457-.884v-3.616h1.673v3.616zm-.211.884h2.115l.596-.615V9.904l-.596-.596h-2.115l-.616.596v4.173zm3.636 0h.827v-3.375l1.596 3.375H20V9.308h-.827v3.375l-1.596-3.375h-.827zM2 19V5h20v14z"></svg:path>`,
})
export class MaterialSymbolsLightFileJsonSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
