import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderLimitedOutlineRoundedIcon],svg[material-symbols-folder-limited-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6zm8-1q1.65 0 2.825-1.175T16 13t-1.175-2.825T12 9t-2.825 1.175T8 13t1.175 2.825T12 17m-1.15-6.2q.275-.125.55-.213t.6-.087q1.05 0 1.775.725T14.5 13q0 .325-.088.6t-.212.55zM12 15.5q-1.05 0-1.775-.725T9.5 13q0-.325.088-.6t.212-.55l3.35 3.35q-.275.125-.55.213t-.6.087"></svg:path>`,
})
export class MaterialSymbolsFolderLimitedOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
