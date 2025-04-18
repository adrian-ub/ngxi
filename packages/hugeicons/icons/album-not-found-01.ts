import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlbumNotFound01Icon],svg[hugeicons-album-not-found-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.82 20.82C19.643 22 17.745 22 13.95 22s-5.693 0-6.872-1.18c-.657-.656-.948-1.537-1.077-2.846M17.974 6c1.309.129 2.19.42 2.847 1.077C22 8.256 22 10.154 22 13.949c0 1.433 0 2.596-.064 3.551"></svg:path><svg:path d="M16.828 16.828C15.657 18 13.771 18 10 18s-5.657 0-6.828-1.172S2 13.771 2 10s0-5.657 1.172-6.828M6.5 2.062C7.444 2 8.59 2 10 2c3.771 0 5.657 0 6.828 1.172S18 6.229 18 10c0 1.41 0 2.556-.061 3.5"></svg:path><svg:path d="M5 17c1.818-2.364 3.723-4.583 6-6m7 .544c-1.252-.965-2.413-1.44-3.5-1.544M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsAlbumNotFound01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
