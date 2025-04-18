import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStartUp02Icon],svg[hugeicons-start-up-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.6 11.923c5.073-9.454 11.39-9.563 13.913-8.436c1.127 2.524 1.018 8.84-8.436 13.913c-.098-.564-.643-2.04-2.04-3.437s-2.873-1.942-3.437-2.04"></svg:path><svg:path d="M13.35 16.95c1.839.9 2.035 2.514 2.29 4.05c0 0 3.85-2.846 1.387-6.75M7.05 10.727C6.15 8.888 4.536 8.692 3 8.437c0 0 2.847-3.85 6.75-1.387m-3.732 7.862c-.512.511-1.382 1.996-.768 3.838c1.843.614 3.327-.256 3.84-.767M17.3 8.45a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0"></svg:path></svg:g>`,
})
export class HugeiconsStartUp02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
