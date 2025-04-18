import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biToggle2OnIcon],svg[bi-toggle2-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 5H3a3 3 0 0 0 0 6h4a5 5 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416q.235-.537.584-1"></svg:path><svg:path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class BiToggle2OnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
