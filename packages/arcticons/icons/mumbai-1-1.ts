import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMumbai11Icon],svg[arcticons-mumbai-1-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.783 20.68l-2.83-1.66L4.5 30.25l6.287 3.63v6.714l12.873-7.433l13.098 7.563v-7.033L43.5 29.8l-13.654-7.884V7.808l-5.82 3.36l-6.741-3.893V22.89"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.846 21.916v8.255l-2.72 1.57m-3.466 1.421l-6.348-3.665v-3.33"></svg:path>`,
})
export class ArcticonsMumbai11Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
