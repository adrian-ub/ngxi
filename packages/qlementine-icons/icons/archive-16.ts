import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArchive16Icon],svg[qlementine-icons-archive-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H2v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM3 12.5V5h10v7.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5M14 4V3H2v1z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsArchive16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
