import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSokobanIcon],svg[arcticons-sokoban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4.5l-8.91 25.73h17.82Zm-8.91 25.73L24 43.5l8.91-13.27Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 4.5l8.91 25.73l8.87-.39Zm17.78 25.34l-8.87.39L24 43.5ZM24 4.5L6.22 29.84l8.87.39Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.22 29.84L24 43.5l-8.91-13.27Z"></svg:path>`,
})
export class ArcticonsSokobanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
