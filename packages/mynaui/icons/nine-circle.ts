import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiNineCircleIcon],svg[mynaui-nine-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M10.5 16h1a3 3 0 0 0 3-3v-2.5m0 0a2.5 2.5 0 0 0-5 0c0 1.38 1.12 2 2.5 2s2.5-.62 2.5-2"></svg:path></svg:g>`,
})
export class MynauiNineCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
