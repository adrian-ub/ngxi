import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenshotOutlineRoundedIcon],svg[material-symbols-light-screenshot-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.73 16.23v-2.057q0-.19.127-.316t.316-.126t.317.126t.125.316v2.135q0 .348-.23.577q-.23.23-.577.23h-2.135q-.19 0-.316-.125t-.126-.317t.126-.316t.316-.126zM9.27 7.77v2.057q0 .19-.127.316t-.316.126t-.316-.126t-.126-.316V7.692q0-.348.23-.578t.577-.23h2.135q.19 0 .316.126t.126.317t-.126.316t-.316.126zM7.615 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm0-1h10v-13H7zm0-14h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightScreenshotOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
