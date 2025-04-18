import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoStableRoundedIcon],svg[material-symbols-light-video-stable-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm12.57-1.783l1.877-7.128q.087-.324-.078-.616t-.487-.379L7.858 6.217q-.324-.086-.616.078q-.292.165-.379.488l-1.877 7.07q-.086.324.078.616q.165.293.488.379l10.64 2.935q.324.086.616-.078t.379-.488"></svg:path>`,
})
export class MaterialSymbolsLightVideoStableRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
