import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBeaterIcon],svg[hugeicons-beater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 5h11c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 6.393 21 7.096 21 8.5s0 2.107-.337 2.611a2 2 0 0 1-.552.552C19.607 12 18.904 12 17.5 12h-11c-1.404 0-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C3 10.607 3 9.904 3 8.5s0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5m11 11h-2a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5m-1 6v-1m0-9v4M8 2h7c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 3.602 18 4.068 18 5m-1 3.5h-.009m-3.982 0H13" color="currentColor"></svg:path>`,
})
export class HugeiconsBeaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
