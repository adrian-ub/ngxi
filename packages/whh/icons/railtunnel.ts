import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRailtunnelIcon],svg[whh-railtunnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 640q-13 0-22.5-9.5T704 608V384q0-87-43-160.5T544.5 107T384 64t-160.5 43T107 223.5T64 384v224q0 13-9.5 22.5T32 640t-22.5-9.5T0 608V384q0-104 51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384v224q0 13-9.5 22.5T736 640m-576 0q-13 0-22.5-9.5T128 608V384q0-106 75-181t181-75t181 75t75 181v224q0 13-9.5 22.5T608 640h-32l96 384H96l96-384zm369 128H239l-9 64h308zm26 192l-9-64H222l-9 64zM247 704h274l-9-64H256z"></svg:path>`,
})
export class WhhRailtunnelIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
