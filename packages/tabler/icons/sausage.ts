import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSausageIcon],svg[tabler-sausage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.5 5.5A2.5 2.5 0 0 0 3 8c0 7.18 5.82 13 13 13a2.5 2.5 0 1 0 0-5a8 8 0 0 1-8-8a2.5 2.5 0 0 0-2.5-2.5"></svg:path><svg:path d="M5.195 5.519L3.952 3.53A1 1 0 0 1 4.8 2h1.392a1 1 0 0 1 .848 1.53L5.795 5.52m12.687 12.705l1.989-1.243a1 1 0 0 1 1.53.848v1.392a1 1 0 0 1-1.53.848l-1.991-1.245"></svg:path></svg:g>`,
})
export class TablerSausageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
