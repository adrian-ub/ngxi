import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWashEcoIcon],svg[tabler-wash-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 6l1.721 10.329A2 2 0 0 0 6.694 18H12m8.162-6.972L21 6"></svg:path><svg:path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5c.79.009 1.539-.178 2-.5c.461-.32 1.21-.507 2-.5c.79-.007 1.539.18 2 .5c.461.322 1.21.509 2 .5q.256-.002.503-.034M16 22s0-2 3-4"></svg:path><svg:path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3"></svg:path></svg:g>`,
})
export class TablerWashEcoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
