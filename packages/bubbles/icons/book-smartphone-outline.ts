import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBookSmartphoneOutlineIcon],svg[bubbles-book-smartphone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.5 19.751h-3a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4m-11-3h11m-11 13h5"></svg:path><svg:path d="M15.5 11.251s1.716-2.58 7.481-2.727a.51.51 0 0 1 .519.5v11a.5.5 0 0 1-.5.5c-5.783.141-7.5 2.728-7.5 2.728v-12s-1.716-2.58-7.481-2.727a.51.51 0 0 0-.519.5v11a.5.5 0 0 0 .5.5c5.783.141 7.5 2.728 7.5 2.728"></svg:path></svg:g>`,
})
export class BubblesBookSmartphoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
