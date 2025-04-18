import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLetterSpacing2Icon],svg[ri-letter-spacing-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.2 14h2.154l1.2-3h4.892l1.2 3H17.8L13 2h-2zM12 4.885L13.646 9h-3.292zM3 16v6h2v-2h14v2h2v-6h-2v2H5v-2z"></svg:path>`,
})
export class RiLetterSpacing2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
