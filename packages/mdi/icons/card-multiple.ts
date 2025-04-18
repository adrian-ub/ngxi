import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardMultipleIcon],svg[mdi-card-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v10c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H7c-.53 0-1.04-.21-1.41-.59C5.21 16.04 5 15.53 5 15V5c0-.53.21-1.04.59-1.41C5.96 3.21 6.47 3 7 3zM3 19h15v2H3c-.53 0-1.04-.21-1.41-.59C1.21 20.04 1 19.53 1 19V8h2z"></svg:path>`,
})
export class MdiCardMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
