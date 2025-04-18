import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenPortraitRoundedIcon],svg[material-symbols-light-splitscreen-portrait-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.192 17.616h5.616q.343 0 .575-.233t.233-.575V14q0-.343-.233-.575t-.575-.233H9.192q-.343 0-.575.233T8.385 14v2.808q0 .343.232.575t.575.233m0-6.808h5.616q.343 0 .575-.232t.233-.576V7.192q0-.343-.233-.575t-.575-.232H9.192q-.343 0-.575.232t-.233.575V10q0 .343.233.576t.575.232M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenPortraitRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
