import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWashOffIcon],svg[tabler-wash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612q.314-.001.6-.092m1.521-2.472L21 6"></svg:path><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5m4.92.919c.428-.083.805-.227 1.08-.418c.461-.322 1.21-.508 2-.5c.79-.008 1.539.178 2 .5c.461.32 1.21.508 2 .5c.17 0 .339-.015.503-.035M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
