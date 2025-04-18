import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDigestionIcon],svg[hugeicons-digestion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.485 2c.243 1.49.956 2.574 2.99 1.872c4.202-1.451 7.524 2.977 7.524 6.928c0 3.976-2.646 7.2-5.91 7.2h-1.064c-2.533 0-4.75 1.632-5.572 4"></svg:path><svg:path d="M6.006 2v.776c0 3.802 5.422 6.611 3.631 10.424C8.926 14.715 4.895 17.293 4 22M14 7a3.03 3.03 0 0 1 2 2"></svg:path></svg:g>`,
})
export class HugeiconsDigestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
