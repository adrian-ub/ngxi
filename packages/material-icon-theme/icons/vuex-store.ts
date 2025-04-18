import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVuexStoreIcon],svg[material-icon-theme-vuex-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#41b883" d="M1.646 14.41L6.729 4.157l1.27 2.501v2.63l-2.525 5.124zm12.708.009L9.27 4.164L8 6.665v2.63l2.517 5.124z"></svg:path><svg:path fill="#35495e" d="M1.646 1.582L4.823 8l1.906-3.844l-1.27-2.574zm12.708 0L11.177 8L9.27 4.156l1.27-2.574z"></svg:path>`,
})
export class MaterialIconThemeVuexStoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
