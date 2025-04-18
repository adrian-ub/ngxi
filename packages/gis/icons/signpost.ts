import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisSignpostIcon],svg[gis-signpost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 0a3.5 3.5 0 0 0-3.5 3.5V8H15.396a1.5 1.5 0 0 0-1.093.475l-6.233 6.65a1.5 1.5 0 0 0 0 2.05l6.233 6.653a1.5 1.5 0 0 0 1.093.475H46.5v6.302H23.396a1.5 1.5 0 0 0-1.093.475l-6.233 6.65a1.5 1.5 0 0 0 0 2.051l6.233 6.653a1.5 1.5 0 0 0 1.093.474H46.5V93h-8a3.5 3.5 0 0 0-3.5 3.5a3.5 3.5 0 0 0 3.5 3.5h23a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5h-8V35.605h27.104a1.5 1.5 0 0 0 1.093-.474l6.233-6.652a1.5 1.5 0 0 0 0-2.051l-6.233-6.65a1.5 1.5 0 0 0-1.093-.475H53.5V3.5A3.5 3.5 0 0 0 50 0" color="currentColor"></svg:path>`,
})
export class GisSignpostIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
