import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSaturn02Icon],svg[hugeicons-saturn-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M5.636 18.364A9 9 0 0 1 16.5 4.204m-8 16.09a9 9 0 0 0 12.397-9.663"></svg:path><svg:path d="M21.173 6.38c.895-1.86 1.104-3.307.428-3.982c-.874-.872-3.037-.267-5.714 1.388m2.418 7.044a44 44 0 0 1-3.516 3.954c-5.302 5.303-10.85 8.356-12.39 6.818c-.877-.876-.265-3.051 1.403-5.741"></svg:path></svg:g>`,
})
export class HugeiconsSaturn02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
