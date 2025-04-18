import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRealEstate02Icon],svg[hugeicons-real-estate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 22V7.485c0-1.098 0-1.646-.316-2.11c-.315-.463-.896-.767-2.059-1.376l-1.48-.774c-1.824-.956-2.737-1.434-3.44-1.138C13 2.383 13 3.245 13 4.967V9m9 13H2M21 8h-2m2 3h-2m2 3h-2"></svg:path><svg:path d="M8 13c0-1.886 0-2.828.586-3.414S10.114 9 12 9s2.828 0 3.414.586S16 11.114 16 13v9H8zm3.5 0h1m-1 3h1"></svg:path><svg:ellipse cx="3.5" cy="14" rx="1.5" ry="2"></svg:ellipse><svg:path d="M3.5 16v6"></svg:path></svg:g>`,
})
export class HugeiconsRealEstate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
