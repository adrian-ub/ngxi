import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTwoPagerOutlineRoundedIcon],svg[material-symbols-light-two-pager-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1H11.5V6H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192m7.885 0h6.885q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H12.5zm-6.615-2.5h3.73q.213 0 .357-.144t.144-.357t-.144-.356t-.356-.143H5.885q-.213 0-.357.144t-.143.357t.143.356t.357.143m0-3h3.73q.213 0 .357-.144t.144-.357t-.144-.356t-.356-.143H5.885q-.213 0-.357.144t-.143.357t.143.356t.357.143m0-3h3.73q.213 0 .357-.144t.144-.357t-.144-.356t-.356-.143H5.885q-.213 0-.357.144t-.143.357t.143.356t.357.143m8.5 6h3.73q.213 0 .357-.144t.143-.357t-.143-.356t-.357-.143h-3.73q-.213 0-.357.144t-.143.357t.143.356t.357.143m0-3h3.73q.213 0 .357-.144t.143-.357t-.143-.356t-.357-.143h-3.73q-.213 0-.357.144t-.143.357t.143.356t.357.143m0-3h3.73q.213 0 .357-.144t.143-.357t-.143-.356t-.357-.143h-3.73q-.213 0-.357.144t-.143.357t.143.356t.357.143M11.5 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightTwoPagerOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
