import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBookOnlineOutlineSharpIcon],svg[material-symbols-light-book-online-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.616 15.385v-2.539q.359 0 .602-.243q.244-.243.244-.603t-.244-.603t-.602-.243V8.616h6.769v2.538q-.36 0-.603.243q-.243.244-.243.603t.243.603t.603.243v2.538zM12 14.115q.18 0 .302-.12q.121-.122.121-.303t-.121-.301t-.302-.122t-.302.122t-.121.301t.121.302q.121.122.302.122m0-1.693q.18 0 .302-.121q.121-.121.121-.302t-.121-.302t-.302-.121t-.302.121t-.121.302t.121.302t.302.121m0-1.692q.18 0 .302-.121q.121-.121.121-.302t-.121-.302T12 9.885t-.302.12t-.121.303t.121.302q.121.12.302.12M6 22V2h12v20zm1-2.5V21h10v-1.5zm0-1h10v-13H7zm0-14h10V3H7zm0 0V3zm0 15V21z"></svg:path>`,
})
export class MaterialSymbolsLightBookOnlineOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
