import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsTrophyIcon],svg[akar-icons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a7 7 0 0 1-7 7v0a7 7 0 0 1-7-7zm4 18h6l-3-5z"></svg:path><svg:path d="M5 4H4a2 2 0 0 0-2 2v1.239a4 4 0 0 0 2.128 3.535L5.5 11.5M19 4h1a2 2 0 0 1 2 2v.637a5 5 0 0 1-2.66 4.419l-.84.444"></svg:path></svg:g>`,
})
export class AkarIconsTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
