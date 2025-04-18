import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPolygonFillIcon],svg[ph-polygon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.81 52.19a28 28 0 0 0-39.6 0a28 28 0 0 0-4 5L148 47.33a28 28 0 0 0-47.8-19.14A28 28 0 0 0 94.7 60L54.58 96.1a28 28 0 0 0-34.39 4.1a28 28 0 0 0 36.7 42.12l76.75 56.28a28 28 0 1 0 46.17-10.39a28 28 0 0 0-3.33-2.84L206.63 100h1.38a28 28 0 0 0 19.8-47.79Zm-66.42 127.86a28 28 0 0 0-18.29 5.64l-76.74-56.28A28.15 28.15 0 0 0 65.29 108l40.12-36.11a28 28 0 0 0 38.37-9.12L180 72.66a27.88 27.88 0 0 0 8.17 19.13a28.6 28.6 0 0 0 3.32 2.85Z"></svg:path>`,
})
export class PhPolygonFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
