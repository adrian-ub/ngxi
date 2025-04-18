import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDnsChanger3Icon],svg[arcticons-dns-changer-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 18.688v10.624h2.39c2.524 0 4.649-2.125 4.649-4.648v-1.328c0-2.523-2.125-4.648-4.648-4.648zm9.98 10.624V18.688l7.04 10.624V18.688m3.074 9.429c.664.797 1.46 1.195 2.656 1.195h1.594c1.46 0 2.656-1.195 2.656-2.656S36.305 24 34.844 24h-1.727c-1.46 0-2.656-1.195-2.656-2.656s1.195-2.656 2.656-2.656h1.594c1.195 0 1.992.265 2.656 1.195"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsDnsChanger3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
