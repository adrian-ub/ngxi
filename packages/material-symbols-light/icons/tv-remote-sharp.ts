import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvRemoteSharpIcon],svg[material-symbols-light-tv-remote-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m-4 7V2h8v20zm4-8.75q-.52 0-.886-.365q-.364-.364-.364-.885t.365-.886t.885-.364t.886.365t.364.885t-.365.886t-.885.364m0-7.52q.31 0 .52-.21q.21-.209.21-.52t-.21-.52q-.209-.21-.52-.21t-.52.21q-.21.209-.21.52t.21.52q.209.21.52.21"></svg:path>`,
})
export class MaterialSymbolsLightTvRemoteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
