import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsShareIosIcon],svg[pepicons-share-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 3a1 1 0 0 1 2 0v10.5a1 1 0 1 1-2 0V3Z"></svg:path><svg:path d="M10.64 2.768a1 1 0 1 0-1.28-1.536l-3 2.5a1 1 0 0 0 1.28 1.536l3-2.5Z"></svg:path><svg:path d="M9.36 2.768a1 1 0 1 1 1.28-1.536l3 2.5a1 1 0 1 1-1.28 1.536l-3-2.5ZM13 9a1 1 0 1 1 0-2h1c1.623 0 3 1.165 3 2.692v7.616C17 18.835 15.623 20 14 20H6c-1.623 0-3-1.165-3-2.692V9.692C3 8.165 4.377 7 6 7h1a1 1 0 0 1 0 2H6c-.586 0-1 .35-1 .692v7.616c0 .342.414.692 1 .692h8c.586 0 1-.35 1-.692V9.692C15 9.35 14.586 9 14 9h-1Z"></svg:path></svg:g>`,
})
export class PepiconsShareIosIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
