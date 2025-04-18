import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIframeOutlineRoundedIcon],svg[material-symbols-light-iframe-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.192 13.808h5.616v-2.616h-5.616zm-.076.884q-.349 0-.578-.23t-.23-.578v-2.768q0-.349.23-.578t.577-.23h5.77q.348 0 .577.23t.23.578v2.769q0 .348-.23.578t-.578.23zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V8H4v9.385q0 .23.192.423t.423.192"></svg:path>`,
})
export class MaterialSymbolsLightIframeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
