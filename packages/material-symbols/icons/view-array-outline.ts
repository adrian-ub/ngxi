import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewArrayOutlineIcon],svg[material-symbols-view-array-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.5v-11q0-.625.438-1.062T4.5 5t1.063.438T6 6.5v11q0 .625-.437 1.063T4.5 19t-1.062-.437T3 17.5M8.5 19q-.625 0-1.062-.437T7 17.5v-11q0-.625.438-1.062T8.5 5h7q.625 0 1.063.438T17 6.5v11q0 .625-.437 1.063T15.5 19zm9.5-1.5v-11q0-.625.438-1.062T19.5 5t1.063.438T21 6.5v11q0 .625-.437 1.063T19.5 19t-1.062-.437T18 17.5M9 17h6V7H9zm3-5"></svg:path>`,
})
export class MaterialSymbolsViewArrayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
