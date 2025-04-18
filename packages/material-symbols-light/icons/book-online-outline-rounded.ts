import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookOnlineOutlineRoundedIcon],svg[material-symbols-light-book-online-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.454 15.385q-.36 0-.6-.244q-.238-.244-.238-.605v-1.422q0-.106.068-.187t.197-.123q.258-.084.42-.295q.16-.211.16-.506t-.16-.505t-.418-.294q-.125-.031-.196-.117q-.071-.085-.071-.192V9.461q0-.359.243-.602t.604-.244h5.083q.36 0 .6.244q.239.243.239.602v1.434q0 .107-.069.192t-.199.123q-.261.074-.42.284t-.158.504t.16.504t.418.294q.125.031.197.116q.07.086.07.193v1.434q0 .359-.243.602t-.603.244zM12 14.115q.18 0 .302-.12q.121-.122.121-.303t-.121-.301t-.302-.122t-.302.122t-.121.301t.121.302q.121.122.302.122m0-1.693q.18 0 .302-.121q.121-.121.121-.302t-.121-.302t-.302-.121t-.302.121t-.121.302t.121.302t.302.121m0-1.692q.18 0 .302-.121q.121-.121.121-.302t-.121-.302T12 9.885t-.302.12t-.121.303t.121.302q.121.12.302.12M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 19.5v.885q0 .23.192.423t.423.192h8.77q.23 0 .423-.192t.192-.424V19.5zm0-1h10v-13H7zm0-14h10v-.885q0-.23-.192-.423T16.384 3H7.616q-.231 0-.424.192T7 3.616zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightBookOnlineOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
