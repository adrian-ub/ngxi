import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDesktopCloudStackIcon],svg[material-symbols-desktop-cloud-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16h6.5q1.05 0 1.775-.737T16 13.474t-.75-1.775t-1.8-.725q-.2-1.275-1.175-2.125T10 8q-1.025 0-1.875.55T6.85 10.025q-1.2.05-2.025.913T4 13q0 1.25.875 2.125T7 16m0 7v-2h1.5v-2H3q-.825 0-1.412-.587T1 17V7q0-.825.588-1.412T3 5h14q.825 0 1.413.588T19 7v10q0 .825-.587 1.413T17 19h-5.5v2H13v2zm14-9V3H5V1h16q.825 0 1.413.588T23 3v11z"></svg:path>`,
})
export class MaterialSymbolsDesktopCloudStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
