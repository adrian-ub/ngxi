import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDesktopCloudSharpIcon],svg[material-symbols-desktop-cloud-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14h6.5q1.05 0 1.775-.737T18 11.474T17.25 9.7t-1.8-.725q-.2-1.275-1.175-2.125T12 6q-1.025 0-1.875.55T8.85 8.025q-1.2.05-2.025.913T6 11q0 1.25.875 2.125T9 14m-1 7v-2h2v-2H2V3h20v14h-8v2h2v2z"></svg:path>`,
})
export class MaterialSymbolsDesktopCloudSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
