import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonAToZIcon],svg[arcticons-amazon-a-to-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.281 29.701c1.112-.451 3.092-1.05 3.687-.327c.645.781-.17 2.477-.92 3.794"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.798 30.223c1.759 1.397 6.953 3.534 12.488 3.534c3.63.086 7.194-.993 10.167-3.079m-8.597-9.94c.877 0 1.588.706 1.588 1.577v1.025c0 .87-.71 1.576-1.588 1.576h0a1.58 1.58 0 0 1-1.587-1.576v-1.025c0-.871.71-1.577 1.587-1.577m-4.466-1.301v4.691a.79.79 0 0 0 .794.788h.238m-1.866-4.178h1.667m9.343-2.622h5.71l-5.71 7.896h5.71m-20.847-2.98c0 1.646-1.268 2.98-2.833 2.98h-.994c-1.037 0-1.877-.884-1.877-1.974s.84-1.974 1.877-1.974h3.832"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.438 18.898c.688-.72 1.17-.782 2.498-.782c1.507 0 2.498.692 2.498 2.562v5.334"></svg:path>`,
})
export class ArcticonsAmazonAToZIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
