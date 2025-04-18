import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeHandIcon],svg[tabler-home-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18 9l-6-6l-9 9h2v7a2 2 0 0 0 2 2h3.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2m3 4.5l-.585-.578a1.516 1.516 0 0 0-2 0c-.477.433-.551 1.112-.177 1.622L15 21c.37.506 1.331 1 2 1h3c1.009 0 1.497-.683 1.622-1.593Q22 19 22 18c0-1-.939-1.843-2-2h-1v-2.636C19 12.61 18.328 12 17.5 12s-1.5.61-1.5 1.364z"></svg:path></svg:g>`,
})
export class TablerHomeHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
