import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenLandscapeOutlineRoundedIcon],svg[material-symbols-light-splitscreen-landscape-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15.616h2.808q.348 0 .577-.23q.23-.23.23-.578V9.192q0-.348-.23-.578t-.577-.23H14q-.348 0-.578.23t-.23.578v5.616q0 .348.23.578t.578.23m-6.808 0H10q.348 0 .578-.23t.23-.578V9.192q0-.348-.23-.578T10 8.385H7.192q-.348 0-.577.23q-.23.23-.23.578v5.616q0 .348.23.578t.577.23M4.615 19q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm14.77-13H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423V6.615q0-.23-.192-.423T19.385 6M4 6v12z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenLandscapeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
