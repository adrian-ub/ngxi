import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFokusIcon],svg[arcticons-fokus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 23.159l12.346 12.413l19.381-19.488l-3.636-3.656l-15.63 15.715l-8.71-8.756Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.482 31.916l3.637 3.656L43.5 16.084l-3.636-3.656l-3.637 3.656m-15.674 8.359l-5.028-5.056l-3.637 3.656"></svg:path>`,
})
export class ArcticonsFokusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
