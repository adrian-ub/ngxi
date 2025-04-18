import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biZoomOutIcon],svg[bi-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"></svg:path><svg:path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1a6.5 6.5 0 0 1-1.398 1.4z"></svg:path><svg:path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class BiZoomOutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
