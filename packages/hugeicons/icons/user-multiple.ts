import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserMultipleIcon],svg[hugeicons-user-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.616 20h.49c1.15 0 2.065-.524 2.886-1.256C24.078 16.883 19.174 15 17.5 15m-2-9.931Q15.841 5 16.205 5c1.82 0 3.295 1.343 3.295 3s-1.475 3-3.295 3q-.364 0-.705-.069m-11.019 5.18c-1.179.632-4.27 1.922-2.387 3.536c.92.789 1.944 1.353 3.232 1.353h7.348c1.288 0 2.312-.564 3.232-1.353c1.883-1.614-1.208-2.904-2.387-3.536c-2.765-1.481-6.273-1.481-9.038 0M13 7.5a4 4 0 1 1-8 0a4 4 0 0 1 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
