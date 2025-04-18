import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShop1FilledIcon],svg[tdesign-shop-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v3a4 4 0 0 0 7 2.646A4 4 0 0 0 12 9a4 4 0 0 0 3-1.354A4 4 0 0 0 22 5z"></svg:path><svg:path fill="currentColor" d="M2 22V9.473A5.98 5.98 0 0 0 6 11a6 6 0 0 0 3-.803c.882.51 1.907.803 3 .803a6 6 0 0 0 3-.803c.882.51 1.907.803 3 .803a5.98 5.98 0 0 0 4-1.527V22h-5.5v-8h-9v8z"></svg:path><svg:path fill="currentColor" d="M9.5 16v6h5v-6z"></svg:path>`,
})
export class TdesignShop1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
