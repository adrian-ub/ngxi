import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTerraceIcon],svg[hugeicons-terrace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 14l1 5m0 0l-1 3m1-3h2.653c.704 0 .87.14.986.836L8 22m13-8l-1 5m0 0l1 3m-1-3h-2.653c-.704 0-.87.14-.986.836L16 22m-4-12v12M4.6 7.407c2.07-.969 4.153-2.507 5.69-4.043C11.199 2.454 11.654 2 12 2s.8.455 1.711 1.364c1.536 1.535 3.619 3.074 5.688 4.043c.704.33 1.134.736 1.474 1.528c.26.605.143 1.065-.566 1.065H3.693c-.71 0-.826-.46-.566-1.065c.34-.792.77-1.198 1.473-1.528M11 22h2m-4-7h6" color="currentColor"></svg:path>`,
})
export class HugeiconsTerraceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
