import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePackageSearchIcon],svg[lucide-package-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"></svg:path><svg:path d="M3.29 7L12 12l8.71-5M12 22V12"></svg:path><svg:circle cx="18.5" cy="15.5" r="2.5"></svg:circle><svg:path d="M20.27 17.27L22 19"></svg:path></svg:g>`,
})
export class LucidePackageSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
