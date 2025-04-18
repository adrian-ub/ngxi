import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookOnlineRoundedIcon],svg[material-symbols-light-book-online-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.454 15.385q-.36 0-.6-.244q-.238-.244-.238-.605v-1.422q0-.126.07-.21q.072-.083.197-.108q.257-.081.418-.295T9.46 12t-.16-.5t-.418-.296q-.125-.025-.197-.109q-.07-.084-.07-.209v-1.42q0-.362.243-.606t.603-.244h5.084q.36 0 .6.244q.238.244.238.605v1.422q0 .126-.07.21q-.072.083-.197.108q-.257.081-.418.295t-.16.501t.16.5t.418.296q.125.025.196.109t.071.209v1.421q0 .362-.243.606t-.604.244zM12 14.115q.18 0 .302-.12q.121-.122.121-.303t-.121-.301t-.302-.122t-.302.122t-.121.301t.121.302q.121.122.302.122m0-1.693q.18 0 .302-.121q.121-.121.121-.302t-.121-.302t-.302-.121t-.302.121t-.121.302t.121.302t.302.121m0-1.692q.18 0 .302-.121q.121-.121.121-.302t-.121-.302T12 9.885t-.302.12t-.121.303t.121.302q.121.12.302.12M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 18.5h10v-13H7z"></svg:path>`,
})
export class MaterialSymbolsLightBookOnlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
