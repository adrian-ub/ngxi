import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScannerRoundedIcon],svg[material-symbols-light-scanner-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.985 13L5.296 8.404q-.195-.07-.28-.245t-.012-.363t.256-.286t.37-.025L18.609 12.2q.73.277 1.061.854t.33 1.215v3.115q0 .691-.462 1.153T18.384 19H5.616q-.691 0-1.153-.462T4 17.384v-2.768q0-.691.463-1.153T5.616 13zm-7.331 3.5H17q.213 0 .356-.144t.144-.357t-.144-.356T17 15.5h-6.346q-.213 0-.356.144t-.144.357t.144.356t.356.143M7 16.77q.328 0 .548-.222t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22"></svg:path>`,
})
export class MaterialSymbolsLightScannerRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
