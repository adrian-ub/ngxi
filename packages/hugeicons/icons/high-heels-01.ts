import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHighHeels01Icon],svg[hugeicons-high-heels-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 4c1.688 1.19 5.64 2.358 9 1.897M5 6c.754 2.5 3.945 3.445 2.725 4.678c-.436.44-1.137.881-2.29 1.322M18 18c-.968.667-2.31 1.867-1.936 4"></svg:path><svg:path d="M13 21.968c-3 0-3.3-7.274-8.362-10.374c-.803-.492-1.763-1.14-1.625-2.22c.207-1.613 1.674-3.233 3.14-3.992c1.1-.57 1.565-2.1 1.742-2.94c.046-.215.018-.372.096-.424l.048-.004a.17.17 0 0 1 .1.016c4.886 1.962 7.402 1.502 7.44 1.7c.138.71.349 2.487-.226 5.161c-.97 4.512-.207 7.914 1.937 9.024c.968.501 4.84 1.003 3.388 3.008C19.692 22.284 13 21.968 13 21.968"></svg:path></svg:g>`,
})
export class HugeiconsHighHeels01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
