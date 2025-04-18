import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopBookCircleIcon],svg[pepicons-pop-book-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 8.297a1 1 0 0 0-.838-.987L5.323 6.026A2 2 0 0 0 3 8v9.737a2 2 0 0 0 1.69 1.976l8.155 1.275A1 1 0 0 0 14 20zm-9 9.44V8l7 1.147v9.684z"></svg:path><svg:path d="M23 8a2 2 0 0 0-2.323-1.974L12.838 7.31a1 1 0 0 0-.838.987V20a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 23 17.737zm-2 9.737l-7 1.094V9.147L21 8z"></svg:path><svg:path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></svg:path></svg:g>`,
})
export class PepiconsPopBookCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
