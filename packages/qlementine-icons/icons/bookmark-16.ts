import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsBookmark16Icon],svg[qlementine-icons-bookmark-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.38 11.2a1 1 0 0 1 1.25 0l3.38 2.7V3h-8v10.9l3.38-2.7zm.625.781l-4.19 3.35a.5.5 0 0 1-.812-.39v-12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a.5.5 0 0 1-.812.39l-4.19-3.35z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsBookmark16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
