import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaClosed2Icon],svg[tabler-umbrella-closed-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.697 12.071L18.01 5l-7.07 11.314zm2.046 2.404l-2.121 2.121c-1.886 1.886.943 4.715 2.828 2.829"></svg:path>`,
})
export class TablerUmbrellaClosed2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
