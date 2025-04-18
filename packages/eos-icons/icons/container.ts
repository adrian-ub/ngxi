import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsContainerIcon],svg[eos-icons-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5a1.96 1.96 0 0 0 .796 1.56L5.5 9.986H3.997A1.997 1.997 0 0 0 2 11.983v8.023a1.997 1.997 0 0 0 1.997 1.997h16A2.004 2.004 0 0 0 22 19.999v-8.016a1.997 1.997 0 0 0-1.997-1.997h-1.491L13.21 6.555A1.96 1.96 0 0 0 14 5a2.03 2.03 0 0 0-1-1.721V2h-1v2a1 1 0 1 1-1 1m.995 1.974l.005.001l.017-.002l4.655 3.013h-9.33ZM7 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class EosIconsContainerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
