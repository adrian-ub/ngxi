import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCheckmarkStarburstIcon],svg[proicons-checkmark-starburst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.072 4.069a2.17 2.17 0 0 1 2.804-1.162l1.315.529c.52.208 1.099.208 1.618 0l1.315-.529a2.17 2.17 0 0 1 2.804 1.162l.556 1.303c.22.515.63.925 1.144 1.144l1.303.556a2.17 2.17 0 0 1 1.162 2.804l-.529 1.315a2.17 2.17 0 0 0 0 1.618l.529 1.315a2.17 2.17 0 0 1-1.162 2.804l-1.303.556a2.17 2.17 0 0 0-1.144 1.144l-.556 1.303a2.17 2.17 0 0 1-2.804 1.162l-1.315-.529a2.17 2.17 0 0 0-1.618 0l-1.315.529a2.17 2.17 0 0 1-2.804-1.162l-.556-1.303a2.17 2.17 0 0 0-1.144-1.144l-1.303-.556a2.17 2.17 0 0 1-1.162-2.804l.529-1.315a2.17 2.17 0 0 0 0-1.618l-.529-1.315A2.17 2.17 0 0 1 4.07 7.072l1.303-.556a2.17 2.17 0 0 0 1.144-1.144z"></svg:path><svg:path d="m15.899 9.5l-5 5l-2.797-2.793"></svg:path></svg:g>`,
})
export class ProiconsCheckmarkStarburstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
