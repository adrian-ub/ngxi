import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSheriff01Icon],svg[hugeicons-sheriff-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 8c3.476 5.333 16.524 5.333 20 0"></svg:path><svg:path d="m5 10l2.125-7.008c.644-2.122 2.15-.273 3.472.348a3.34 3.34 0 0 0 2.807 0c1.32-.621 2.827-2.47 3.471-.348L19 10m0 1c0 2.808-.303 5.46-2.569 7.012C14.587 19.275 10.857 19.338 10 22"></svg:path><svg:path d="M5 11c0 2.808.303 5.46 2.569 7.012C9.413 19.275 13.143 19.338 14 22"></svg:path></svg:g>`,
})
export class HugeiconsSheriff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
