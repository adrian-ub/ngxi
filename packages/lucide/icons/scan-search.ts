import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScanSearchIcon],svg[lucide-scan-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="m16 16l-1.9-1.9"></svg:path></svg:g>`
})
export class LucideScanSearchIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
