import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaTagOutlineIcon],svg[cuida-tag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="tag-outline"><svg:g fill="currentColor" class="Vector"><svg:path fill-rule="evenodd" d="m20.515 15.649l-3.901 4.332a4.32 4.32 0 0 1-6.102.32l-6.205-5.587a4.32 4.32 0 0 1-1.43-3.22l.009-3.915a4.32 4.32 0 0 1 3.86-4.286l3.892-.418A4.32 4.32 0 0 1 13.99 3.96l6.205 5.587a4.32 4.32 0 0 1 .32 6.102m-5.388 2.994l3.901-4.333a2.32 2.32 0 0 0-.171-3.277L12.65 5.447a2.32 2.32 0 0 0-1.8-.582l-3.89.415a2.32 2.32 0 0 0-2.073 2.302l-.008 3.915a2.32 2.32 0 0 0 .767 1.73l6.206 5.586a2.32 2.32 0 0 0 3.276-.171Z" clip-rule="evenodd"></svg:path><svg:path d="M8.65 7.884a1.056 1.056 0 1 1-2.108.11a1.056 1.056 0 0 1 2.108-.11"></svg:path></svg:g></svg:g>`,
})
export class CuidaTagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
