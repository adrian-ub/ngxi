import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentationOnlineIcon],svg[hugeicons-presentation-online-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.409 17.118c-.359-1.516-.538-2.274-.303-2.858c.146-.363.396-.676.72-.9C6.346 13 7.13 13 8.702 13h6.597c1.57 0 2.355 0 2.875.36c.324.224.574.537.72.9c.235.584.056 1.342-.303 2.858c-.353 1.494-.53 2.24-.97 2.777a3 3 0 0 1-1.02.802c-.628.303-1.402.303-2.949.303h-3.304c-1.547 0-2.32 0-2.948-.303a3 3 0 0 1-1.02-.802c-.442-.537-.618-1.283-.971-2.777M3 21h18m-10-5h2m-5-5c1.838-2.595 6.119-2.737 8 0m-2-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentationOnlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
