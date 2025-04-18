import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenLandscapeRoundedIcon],svg[material-symbols-light-splitscreen-landscape-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15.616h2.808q.343 0 .575-.233t.233-.575V9.192q0-.343-.233-.575t-.575-.233H14q-.343 0-.575.233t-.233.575v5.616q0 .343.232.575t.576.233m-6.808 0H10q.343 0 .576-.233t.232-.575V9.192q0-.343-.232-.575T10 8.385H7.192q-.343 0-.575.232t-.232.575v5.616q0 .343.232.575t.575.233M4.615 19q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenLandscapeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
