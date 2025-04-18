import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBag03Icon],svg[hugeicons-shopping-bag-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3.062 14.441l.365-2.142c.432-2.533.647-3.8 1.502-4.55C5.784 7 7.012 7 9.467 7h5.066c2.455 0 3.683 0 4.538.75s1.07 2.016 1.502 4.549l.365 2.142c.598 3.505.896 5.257-.023 6.408C19.995 22 18.295 22 14.898 22H9.102c-3.398 0-5.097 0-6.017-1.15c-.92-1.152-.62-2.904-.023-6.409"></svg:path><svg:path d="m7.5 9l.215-3.01a4.296 4.296 0 0 1 8.57 0L16.5 9"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBag03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
