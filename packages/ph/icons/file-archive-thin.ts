import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileArchiveThinIcon],svg[ph-file-archive-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220h-92v-24h12a4 4 0 0 0 0-8h-12v-24h12a4 4 0 0 0 0-8h-12v-24h12a4 4 0 0 0 0-8h-12v-12a4 4 0 0 0-8 0v12H88a4 4 0 0 0 0 8h12v24H88a4 4 0 0 0 0 8h12v24H88a4 4 0 0 0 0 8h12v24H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhFileArchiveThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
