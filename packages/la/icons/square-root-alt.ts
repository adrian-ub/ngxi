import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSquareRootAltIcon],svg[la-square-root-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.313 6l-.25.656l-6.157 16.063l-3-6.157L9.625 16H6v2h2.375L12 25.438l.281.562h1.5l.25-.656L20.687 8H26V6z"></svg:path>`,
})
export class LaSquareRootAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
