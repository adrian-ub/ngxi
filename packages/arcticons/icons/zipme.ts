import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZipmeIcon],svg[arcticons-zipme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4"></svg:path><svg:path d="M10.368 7.447v1.948l.974.974h1.947l.974-.974V7.447"></svg:path><svg:path d="m12.316 10.368l-.974.974v1.947l.974.974l.973-.974v-1.947zm-1.948-2.921h3.895m-2.921 0V5.5h0m1.948 1.947V5.5m-1.948 9.737V42.5m1.948-27.263V42.5m-1.948-2.921h1.947m-1.947-2.921h1.947m-1.947-2.921h1.947m-1.947-2.921h1.947m-1.947-2.921h1.947m-1.947-2.921h1.947m-1.947-2.921h1.947m-1.947-2.921h1.947m-1.947-2.922h1.947m16.553-4.868h5.842m-2.921-2.921v5.842"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.605 35.853a.949.949 0 1 1 0-1.898a.949.949 0 0 1 0 1.898m5.538 0a.949.949 0 1 1 0-1.898a.949.949 0 0 1 0 1.898"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.366 29.996a6.783 6.783 0 0 1 6.783 6.783h0a.964.964 0 0 1-.964.964h0h-11.668a.964.964 0 0 1-.965-.964h0a6.783 6.783 0 0 1 6.783-6.783zm-5.857-1.011l1.929 2.263m9.786-2.263l-1.93 2.263"></svg:path>`,
})
export class ArcticonsZipmeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
