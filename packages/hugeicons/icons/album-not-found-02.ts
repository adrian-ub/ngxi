import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlbumNotFound02Icon],svg[hugeicons-album-not-found-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 6h.009M2 11.106q1.034-.105 2.081-.104c2.95-.044 5.827.601 8.118 1.82Q13.197 13.355 14 14m6.82 6.82C19.643 22 17.745 22 13.95 22s-5.693 0-6.872-1.18c-.657-.656-.948-1.537-1.077-2.846M17.974 6c1.309.129 2.19.42 2.847 1.077C22 8.256 22 10.154 22 13.949c0 1.433 0 2.596-.064 3.551"></svg:path><svg:path d="M16.828 16.828C15.657 18 13.771 18 10 18s-5.657 0-6.828-1.172S2 13.771 2 10s0-5.657 1.172-6.828M6.5 2.062C7.444 2 8.59 2 10 2c3.771 0 5.657 0 6.828 1.172S18 6.229 18 10c0 1.41 0 2.556-.061 3.5M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsAlbumNotFound02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
