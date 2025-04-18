import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsJump16Icon],svg[qlementine-icons-jump-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.5a.5.5 0 0 0-1 0v5.89l-.048-.108l-.026-.061l-.065-.143l-.095-.196a10.3 10.3 0 0 0-1.521-2.222c-1.49-1.66-3.4-2.67-5.75-2.67c-3.54 0-6.06 1.8-7.46 5.31a.5.5 0 1 0 .929.37c1.26-3.15 3.41-4.69 6.54-4.69c2.03 0 3.69.87 5 2.33a9 9 0 0 1 1.398 2.06l.097.209l.165.397h-5.66a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5v-7z"></svg:path>`,
})
export class QlementineIconsJump16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
