import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGlassCocktailIcon],svg[tabler-glass-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 21h8m-4-6v6M5 5a7 2 0 1 0 14 0A7 2 0 1 0 5 5"></svg:path><svg:path d="M5 5v.388c0 .432.126.853.362 1.206l5 7.509c.633.951 1.88 1.183 2.785.517c.191-.141.358-.316.491-.517l5-7.509c.236-.353.362-.774.362-1.206V5"></svg:path></svg:g>`,
})
export class TablerGlassCocktailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
