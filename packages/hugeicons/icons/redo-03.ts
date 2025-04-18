import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRedo03Icon],svg[hugeicons-redo-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 8.332H9a6 6 0 1 0 0 12h4"></svg:path><svg:path d="m17 4.332l1.154.877C20.05 6.65 21 7.37 21 8.332s-.949 1.682-2.846 3.124L17 12.332"></svg:path></svg:g>`,
})
export class HugeiconsRedo03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
