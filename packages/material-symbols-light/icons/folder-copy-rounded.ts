import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFolderCopyRoundedIcon],svg[material-symbols-light-folder-copy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.616 19.77q-.667 0-1.141-.475T2 18.154V7.577q0-.213.144-.356t.357-.144t.356.144t.143.356v10.577q0 .269.173.442t.443.173H18.5q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm3-3q-.667 0-1.141-.475T5 15.154V4.616q0-.667.475-1.142T6.615 3h4.29q.333 0 .633.13t.518.349L13.577 5h6.808q.666 0 1.14.475T22 6.615v8.539q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightFolderCopyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
