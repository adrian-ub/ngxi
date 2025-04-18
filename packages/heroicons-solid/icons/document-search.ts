import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidDocumentSearchIcon],svg[heroicons-solid-document-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 4a2 2 0 0 1 2-2h4.586A2 2 0 0 1 12 2.586L15.414 6A2 2 0 0 1 16 7.414V16a2 2 0 0 1-2 2h-1.528A6 6 0 0 0 4 9.528z"></svg:path><svg:path fill-rule="evenodd" d="M8 10a4 4 0 0 0-3.446 6.032l-1.261 1.26a1 1 0 1 0 1.414 1.415l1.261-1.261A4 4 0 1 0 8 10m-2 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsSolidDocumentSearchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
