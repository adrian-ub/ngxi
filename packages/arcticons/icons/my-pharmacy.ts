import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyPharmacyIcon],svg[arcticons-my-pharmacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.79 14.6h20.42a9.274 9.274 0 0 1 9.29 9.3v.2a9.274 9.274 0 0 1-9.29 9.3H13.79a9.274 9.274 0 0 1-9.29-9.3v-.2a9.274 9.274 0 0 1 9.29-9.299"></svg:path><svg:path d="M24 14.6v6.974h-.176h0c-1.43 0-2.58 1.082-2.58 2.425s1.15 2.425 2.58 2.425l.176.001V33.4"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.866 27.85c-1.757 1.134-4.25 1.78-6.866 1.78s-5.11-.646-6.867-1.78m9.74-7.995c.443-.78 1.325-1.27 2.288-1.27s1.846.49 2.289 1.272m-14.9-.002c.443-.78 1.325-1.27 2.288-1.27s1.846.49 2.289 1.272"></svg:path>`,
})
export class ArcticonsMyPharmacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
