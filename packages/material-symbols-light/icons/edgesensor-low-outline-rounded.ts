import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEdgesensorLowOutlineRoundedIcon],svg[material-symbols-light-edgesensor-low-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.308 13.5q-.214 0-.357-.143T3.808 13V8q0-.213.143-.357t.357-.143t.357.143t.143.357v5q0 .214-.143.357t-.357.143m15.384 3q-.213 0-.356-.143T19.192 16v-5q0-.213.144-.357t.356-.143t.357.143t.143.357v5q0 .214-.143.357t-.357.143M8.423 21q-.69 0-1.153-.462t-.462-1.153V4.615q0-.69.462-1.152T8.423 3h7.154q.69 0 1.153.463t.462 1.153v14.769q0 .69-.462 1.153T15.577 21zm7.77-2.5H7.807v.885q0 .23.192.423t.423.192h7.154q.23 0 .423-.192t.192-.424zm-8.385-13h8.384v-.885q0-.23-.192-.423T15.577 4H8.423q-.23 0-.423.192t-.192.423zm0 0V4zm0 13V20zm0-1h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightEdgesensorLowOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
