import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMap16Icon],svg[qlementine-icons-map-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 2.5a.5.5 0 0 0-.686-.464l-4.81 1.93l-4.81-1.93a.5.5 0 0 0-.371 0l-5 2a.5.5 0 0 0-.314.464v9a.5.5 0 0 0 .686.464l4.81-1.93l4.81 1.93a.5.5 0 0 0 .371 0l5-2A.5.5 0 0 0 16 11.5zM6 3.239l4 1.6v7.92l-4-1.6zm9 7.92l-4 1.6v-7.92l4-1.6zM5 3.239v7.92l-4 1.6v-7.92z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsMap16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
