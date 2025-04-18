import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etSadIcon],svg[et-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16-.034C7.159-.034-.035 7.158-.035 16S7.159 32.034 16 32.034S32.035 24.842 32.035 16S24.841-.034 16-.034m0 31C7.748 30.966 1.035 24.252 1.035 16S7.748 1.034 16 1.034S30.965 7.748 30.965 16S24.252 30.966 16 30.966"></svg:path><svg:path d="M16.163 19.823a10.06 10.06 0 0 0-7.374 3.235a.533.533 0 1 0 .786.725a9 9 0 0 1 6.587-2.892a8.98 8.98 0 0 1 6.656 2.967a.535.535 0 0 0 .794-.717a10.05 10.05 0 0 0-7.449-3.318M10.5 16.5c1.103 0 2-.897 2-2s-.897-2-2-2s-2 .897-2 2s.897 2 2 2m0-3a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1m11 3c1.103 0 2-.897 2-2s-.897-2-2-2s-2 .897-2 2s.897 2 2 2m0-3a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1"></svg:path></svg:g>`,
})
export class EtSadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
