import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookOnlineIcon],svg[material-symbols-light-book-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.454 15.385q-.36 0-.6-.244q-.238-.243-.238-.602v-1.693q.359 0 .602-.243T9.461 12t-.243-.604t-.603-.244V9.455q0-.36.244-.6q.243-.24.603-.24h5.084q.36 0 .6.244q.238.243.238.603v1.692q-.359 0-.602.243q-.244.244-.244.603q0 .36.244.605t.602.244v1.696q0 .36-.243.6q-.244.24-.603.24zM12 14.115q.18 0 .302-.12q.121-.122.121-.303t-.121-.301t-.302-.122t-.302.122t-.121.301t.121.302q.121.122.302.122m0-1.693q.18 0 .302-.121q.121-.121.121-.302t-.121-.302t-.302-.121t-.302.121t-.121.302t.121.302t.302.121m0-1.692q.18 0 .302-.121q.121-.121.121-.302t-.121-.302T12 9.885t-.302.12t-.121.303t.121.302q.121.12.302.12M7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 18.5h10v-13H7z"></svg:path>`,
})
export class MaterialSymbolsLightBookOnlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
