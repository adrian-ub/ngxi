import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsArrowShuffleIcon],svg[akar-icons-arrow-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 19h3.908a2 2 0 0 0 1.682-.919L11.5 12l3.91-6.082A2 2 0 0 1 17.092 5H22m0 14h-4.908a2 2 0 0 1-1.682-.919L13.429 15M2 5h3.908a2 2 0 0 1 1.682.918L9.571 9"></svg:path><svg:path d="m19 2l3 3l-3 3m0 8l3 3l-3 3"></svg:path></svg:g>`,
})
export class AkarIconsArrowShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
