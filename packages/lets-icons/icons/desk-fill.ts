import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDeskFillIcon],svg[lets-icons-desk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 3v3M8 3v3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 4h-4v2a2 2 0 1 1-4 0V4.076c-.975.096-1.631.313-2.121.803C3 5.757 3 7.172 3 10v5c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15v-5c0-2.828 0-4.243-.879-5.121c-.49-.49-1.146-.707-2.121-.803V6a2 2 0 1 1-4 0zm-7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDeskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
