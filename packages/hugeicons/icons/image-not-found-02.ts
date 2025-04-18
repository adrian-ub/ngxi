import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageNotFound02Icon],svg[hugeicons-image-not-found-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.898 13c-2.817 1.888-4.79 5.04-7 8"></svg:path><svg:path d="M3.776 3.5C2.5 4.934 2.5 7.233 2.5 11.745c0 4.599 0 6.898 1.35 8.327C5.2 21.5 7.373 21.5 11.719 21.5c4.253 0 6.425-.172 7.781-1.512m-3-7.974c1.54-.106 3.196.318 4.997 1.606m0 0q.004-.757.003-1.62c0-4.478 0-6.718-1.391-8.109S16.479 2.5 12 2.5c-2.41 0-4.17 0-5.5.217M21.497 13.62c-.01 1.607-.049 2.868-.214 3.88M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsImageNotFound02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
