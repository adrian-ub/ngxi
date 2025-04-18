import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedalFirstPlaceIcon],svg[hugeicons-medal-first-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 15c0-3.866 3.022-7 6.75-7h.5C15.978 8 19 11.134 19 15s-3.022 7-6.75 7h-.5C8.022 22 5 18.866 5 15"></svg:path><svg:path d="M12.5 18v-5.052c0-.574 0-.862-.23-.933c-.507-.157-1.27.984-1.27.984m1.5 5H11m1.5 0H14M13.56 2L11 7.898M18 2l-2.821 6.5M10.44 2L12 5.594M6 2l2.821 6.5"></svg:path></svg:g>`,
})
export class HugeiconsMedalFirstPlaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
