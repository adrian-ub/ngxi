import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderSearchFillIcon],svg[lets-icons-folder-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M3 8h14.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.52 21 10.08 21 11.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 20 18.92 20 17.8 20H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 18.48 3 17.92 3 16.8zm0 0c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 5 5.068 5 6 5h2.343c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02L13 8z"></svg:path><svg:circle cx="11.5" cy="13.5" r="2.5" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 16.5L16 18"></svg:path></svg:g>`,
})
export class LetsIconsFolderSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
