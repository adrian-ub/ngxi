import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFullscreenPortraitOutlineRoundedIcon],svg[material-symbols-light-fullscreen-portrait-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.192 17.616h5.616q.348 0 .578-.23t.23-.578V7.192q0-.348-.23-.577q-.23-.23-.578-.23H9.192q-.348 0-.578.23t-.23.577v9.616q0 .348.23.577q.23.23.578.23M19 19.386q0 .69-.462 1.153T17.384 21H6.616q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616zm-1 0V4.615q0-.23-.192-.423T17.384 4H6.616q-.231 0-.424.192T6 4.615v14.77q0 .23.192.423t.423.192h10.77q.23 0 .423-.192t.192-.424M18 4H6z"></svg:path>`,
})
export class MaterialSymbolsLightFullscreenPortraitOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
