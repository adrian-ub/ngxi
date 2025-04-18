import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaughingIcon],svg[hugeicons-laughing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 11c.504-5.053 4.789-9 10-9s9.496 3.947 10 9m-3 8.175A10.04 10.04 0 0 1 12 22a10.04 10.04 0 0 1-7-2.825M12 18c1.896 0 3.489-1.28 3.936-3.01c.208-.805-.094-.99-.89-.99H8.954c-.796 0-1.098.185-.89.99C8.51 16.72 10.104 18 12 18"></svg:path><svg:path d="M7 9.5a1.5 1.5 0 1 1 3 0m4 0a1.5 1.5 0 0 1 3 0M6 12c-1.555.399-4.459 1.234-3.938 3.782c.268 1.26 1.675 1.493 2.438.926C6.338 15.343 4.5 14 6 12m12 0c1.555.399 4.459 1.234 3.938 3.782c-.268 1.26-1.674 1.493-2.438.926C17.662 15.343 19.5 14 18 12"></svg:path></svg:g>`,
})
export class HugeiconsLaughingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
