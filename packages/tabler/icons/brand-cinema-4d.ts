import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCinema4dIcon],svg[tabler-brand-cinema-4d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.65 6.956a5.39 5.39 0 0 0 7.494 7.495"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M17.7 12.137A5.738 5.738 0 1 1 11.963 6.4"></svg:path><svg:path d="M17.7 12.338v-1.175c0-.47.171-.92.476-1.253a1.56 1.56 0 0 1 1.149-.52c.827 0 1.523.676 1.62 1.573Q21 11.479 21 12m-9.338-5.6h1.175c.47 0 .92-.176 1.253-.49s.52-.74.52-1.184c0-.852-.676-1.57-1.573-1.67A10 10 0 0 0 12 3"></svg:path></svg:g>`,
})
export class TablerBrandCinema4dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
