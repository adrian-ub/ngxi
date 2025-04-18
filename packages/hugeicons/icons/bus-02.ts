import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBus02Icon],svg[hugeicons-bus-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 19v3m-11-3v3M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 2.828 0 4.243-.879 5.121C18.243 19 16.828 19 14 19h-4c-2.828 0-4.243 0-5.121-.879C4 17.243 4 15.828 4 13z"></svg:path><svg:path d="M4 12c1.857.575 4.81 1 8 1s6.143-.425 8-1m2-1h-.528a2 2 0 0 0-.894.211L20 11.5m-16 0l-.578-.289A2 2 0 0 0 2.528 11H2m2.5 5H6m12 0h1.5M10 16h4"></svg:path></svg:g>`,
})
export class HugeiconsBus02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
