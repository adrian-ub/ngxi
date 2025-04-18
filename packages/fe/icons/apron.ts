import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feApronIcon],svg[fe-apron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.694 8l-1 6H6v6h12v-6h-2.694l-1-6zM10 3v3h4V3a1 1 0 0 1 2 0v3l1 6h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1l1-6V3a1 1 0 1 1 2 0M8 16h8v2H8z"></svg:path>`,
})
export class FeApronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
