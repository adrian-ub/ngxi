import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabOutlineRoundedIcon],svg[material-symbols-light-tab-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 18h14.769q.23 0 .423-.192t.192-.424V10h-6.192q-.349 0-.578-.23T13 9.192V6H4.616q-.231 0-.424.192T4 6.616v10.769q0 .23.192.423t.423.192m0 1q-.69 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightTabOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
