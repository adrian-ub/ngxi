import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBrush4FillIcon],svg[ri-brush-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.997H4v2h16zm-17-2v-10a1 1 0 0 1 1-1h3v8.272h2V2.997h11a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5z"></svg:path>`,
})
export class RiBrush4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
