import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDice1Icon],svg[streamline-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5.5h9s2 0 2 2v9s0 2-2 2h-9s-2 0-2-2v-9s0-2 2-2"></svg:path><svg:path d="M6.5 7a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path></svg:g>`,
})
export class StreamlineDice1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
