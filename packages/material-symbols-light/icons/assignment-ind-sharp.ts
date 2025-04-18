import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAssignmentIndSharpIcon],svg[material-symbols-light-assignment-ind-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h6.316q-.112-.784.388-1.392T12 2t1.296.608T13.685 4H20v16zm8-15.558q.325 0 .538-.212t.212-.538t-.213-.537T12 2.942t-.537.213t-.213.537t.213.538t.537.212m0 8.635q1.258 0 2.129-.871T15 10.077t-.871-2.129T12 7.077t-2.129.871T9 10.077t.871 2.129t2.129.871M5 19h14v-.766q-1.35-1.325-3.137-2.087T12 15.385t-3.863.762T5 18.235z"></svg:path>`,
})
export class MaterialSymbolsLightAssignmentIndSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
