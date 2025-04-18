import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeFileArrowUpIcon],svg[prime-file-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 6A2.756 2.756 0 0 1 8 3.25h4.5a.75.75 0 0 1 .53.22l5.5 5.5c.141.14.22.331.22.53V18A2.756 2.756 0 0 1 16 20.75H8A2.756 2.756 0 0 1 5.25 18zM8 4.75c-.686 0-1.25.564-1.25 1.25v12c0 .686.564 1.25 1.25 1.25h8c.686 0 1.25-.564 1.25-1.25v-7.75H12.5a.75.75 0 0 1-.75-.75V4.75zm5.25 1.06l2.94 2.94h-2.94zm-.72 6.16a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v3.19a.75.75 0 0 0 1.5 0v-3.19l.72.72a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class PrimeFileArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
