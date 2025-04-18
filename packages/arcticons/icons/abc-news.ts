import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAbcNewsIcon],svg[arcticons-abc-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 24v-9m10.15 18.331l-1.444 4.637l-1.444-4.637l-1.444 4.637l-1.443-4.637m7.244 4.246c.319.268.664.391 1.439.391h.392c.64 0 1.157-.519 1.157-1.16h0c0-.64-.518-1.159-1.157-1.159h-.785a1.16 1.16 0 0 1-1.157-1.159h0c0-.64.518-1.16 1.157-1.16h.393c.775 0 1.12.124 1.44.392m-16.605 4.246v-2.887a1.75 1.75 0 0 0-1.75-1.75h0a1.75 1.75 0 0 0-1.75 1.75m0 2.887v-4.637m8.479 3.754a1.75 1.75 0 0 1-1.52.883h0a1.75 1.75 0 0 1-1.75-1.75v-1.137c0-.967.783-1.75 1.75-1.75h0c.966 0 1.75.783 1.75 1.75v.568h-3.5"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="12.706" cy="24" r="4.5"></svg:circle><svg:circle cx="24" cy="24" r="4.5"></svg:circle><svg:path d="M39.325 26.002a4.5 4.5 0 1 1 0-4.003"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.206 24v4.5"></svg:path>`,
})
export class ArcticonsAbcNewsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
