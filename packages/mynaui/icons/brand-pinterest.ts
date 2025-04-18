import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandPinterestIcon],svg[mynaui-brand-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M7.452 13.18c-1.108-2.262.4-6.668 5.472-5.948c5.586.794 4.581 9.478-.077 9.138c-1.474-.107-2.031-1.328-2.177-2.576m0 0c-.11-.946.016-1.907.16-2.41c.244-.857.649-.74.353.393c-.144.552-.32 1.245-.513 2.017m0 0c-.514 2.06-1.15 4.685-1.63 6.708"></svg:path></svg:g>`,
})
export class MynauiBrandPinterestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
