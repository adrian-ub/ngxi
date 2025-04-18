import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKuroReaderIcon],svg[arcticons-kuro-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.57 8.742v7.167m3.864-.008l-2.945-3.576l2.945-3.552m2.019 2.39v2.95c0 .988.8 1.788 1.788 1.788h0c.987 0 1.788-.8 1.788-1.788v-2.95m0 2.819v1.792m2.019-2.823c0-.987.8-1.788 1.788-1.788h0m-1.788 0v4.738m5.594 0c-.987 0-1.788-.8-1.788-1.788v-1.162c0-.987.8-1.788 1.788-1.788h0c.988 0 1.788.8 1.788 1.788v1.162c0 .988-.8 1.788-1.788 1.788"></svg:path><svg:rect width="27" height="13.901" x="10.5" y="5.5" rx=".998" ry=".998"></svg:rect></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M24 24.64c-6.106-4.35-13.5-.107-13.5-.107V42.5s7.394-4.399 13.5-.065z"></svg:path><svg:path d="M24 24.64c-6.106-4.35-13.5-.107-13.5-.107V42.5s7.394-4.399 13.5-.065zm0 17.795c6.106-4.334 13.5.065 13.5.065V24.533s-7.394-4.243-13.5.108z"></svg:path></svg:g>`,
})
export class ArcticonsKuroReaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
