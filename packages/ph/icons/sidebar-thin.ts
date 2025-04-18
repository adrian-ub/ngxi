import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSidebarThinIcon],svg[ph-sidebar-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 200v-52h20a4 4 0 0 0 0-8H36v-24h20a4 4 0 0 0 0-8H36V84h20a4 4 0 0 0 0-8H36V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSidebarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
