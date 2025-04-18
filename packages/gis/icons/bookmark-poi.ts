import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisBookmarkPoiIcon],svg[gis-bookmark-poi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.027.027a1.5 1.5 0 0 0-1.5 1.5V2h-.496a2.5 2.5 0 1 0 0 5h.496v49.527c0 1.227 1.392 1.935 2.383 1.213L46.5 46.395V93h-9a3.5 3.5 0 1 0 0 7h25a3.5 3.5 0 1 0 0-7h-9V46.395L69.09 57.74c.991.722 2.383.014 2.383-1.213V7h.523a2.5 2.5 0 1 0 0-5h-.523v-.473a1.5 1.5 0 0 0-1.5-1.5z" color="currentColor"></svg:path>`,
})
export class GisBookmarkPoiIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
