import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayCardStarIcon],svg[tabler-play-card-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 5v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M8 6h.01M16 18h.01"></svg:path><svg:path d="m11.75 14.112l-1.63.853a.294.294 0 0 1-.425-.307l.31-1.808l-1.317-1.28a.292.292 0 0 1 .163-.499l1.82-.264l.815-1.644a.294.294 0 0 1 .527 0l.814 1.644l1.82.264a.292.292 0 0 1 .164.499l-1.318 1.28l.31 1.807a.292.292 0 0 1-.425.308z"></svg:path></svg:g>`,
})
export class TablerPlayCardStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
