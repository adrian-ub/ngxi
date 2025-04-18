import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMetafilterIcon],svg[simple-icons-metafilter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.548 5.26l-.87 4.894h3.558l-.519 2.83h-3.592l-1.602 8.639h-2.857l3.586-19.248H24l-.537 2.885zm-7.331-2.884L7.19 13.472V2.376H3.581L0 21.624h2.452L5.198 6.728l-.251 14.896h1.421l5.225-14.896l-2.786 14.896h2.48l3.581-19.248z"></svg:path>`,
})
export class SimpleIconsMetafilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
