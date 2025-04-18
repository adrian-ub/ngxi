import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderLimitedOutlineSharpIcon],svg[material-symbols-folder-limited-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h8l2 2h10v14zm2-2h16V8h-8.825l-2-2H4zm0 0V6zm8-1q1.65 0 2.825-1.175T16 13t-1.175-2.825T12 9t-2.825 1.175T8 13t1.175 2.825T12 17m-1.15-6.2q.275-.125.55-.213t.6-.087q1.05 0 1.775.725T14.5 13q0 .325-.088.6t-.212.55zM12 15.5q-1.05 0-1.775-.725T9.5 13q0-.325.088-.6t.212-.55l3.35 3.35q-.275.125-.55.213t-.6.087"></svg:path>`,
})
export class MaterialSymbolsFolderLimitedOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
