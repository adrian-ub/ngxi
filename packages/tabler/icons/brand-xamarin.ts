import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandXamarinIcon],svg[tabler-brand-xamarin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.958 21H8.041a2 2 0 0 1-1.732-1l-4.041-7a2 2 0 0 1 0-2l4.041-7a2 2 0 0 1 1.732-1h7.917a2 2 0 0 1 1.732 1l4.042 7a2 2 0 0 1 0 2l-4.041 7a2 2 0 0 1-1.733 1M15 16L9 8m0 8l6-8"></svg:path>`,
})
export class TablerBrandXamarinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
