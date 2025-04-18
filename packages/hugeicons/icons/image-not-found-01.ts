import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageNotFound01Icon],svg[hugeicons-image-not-found-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="16.5" cy="7.5" r="1.5"></svg:circle><svg:path d="M2 14.135q1.001-.135 2.016-.132c2.856-.056 5.642.77 7.86 2.331c2.06 1.448 3.505 3.44 4.124 5.666m-2.5-4.5c1-1 1.677-1.223 2.5-1.5"></svg:path><svg:path d="M20 20.213C18.601 21.5 16.363 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.363 0-6.601 1.287-8M20 16c.543 0 1.048.294 1.397.564c.103-1.195.103-2.681.103-4.564c0-4.478 0-6.718-1.391-8.109S16.479 2.5 12 2.5c-2.41 0-4.17 0-5.5.217M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsImageNotFound01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
