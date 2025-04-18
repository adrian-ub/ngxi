import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelTagIcon],svg[raphael-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.263 2.826h-6.36l-5.2 5.202v6.36L18.404 30.09l11.56-11.562zM6.495 8.86a1.58 1.58 0 0 1 0-2.24c.62-.62 1.622-.62 2.24 0c.62.62.62 1.62 0 2.24c-.618.62-1.62.62-2.24 0"></svg:path>`,
})
export class RaphaelTagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
