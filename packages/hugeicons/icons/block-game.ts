import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlockGameIcon],svg[hugeicons-block-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 18c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18s0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18m0-8c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 14 19.4 14 18 14s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 12.1 14 11.4 14 10s0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.093C15.9 6 16.6 6 18 6s2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 7.9 22 8.6 22 10m-8 8c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C12.1 22 11.4 22 10 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C6 20.1 6 19.4 6 18s0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C7.9 14 8.6 14 10 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C14 15.9 14 16.6 14 18M10 6c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093C8.1 10 7.4 10 6 10s-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6s0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6" color="currentColor"></svg:path>`,
})
export class HugeiconsBlockGameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
