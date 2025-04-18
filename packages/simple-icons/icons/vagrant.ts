import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVagrantIcon],svg[simple-icons-vagrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.556 0L.392 1.846V4.11l7.124 17.3L11.998 24l4.523-2.611l7.083-17.345V1.848l.004-.002L20.44 0l-5.274 3.087v2.111l-3.168 7.384l-3.164-7.384V3.109l-.017-.008l.017-.01z"></svg:path>`,
})
export class SimpleIconsVagrantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
