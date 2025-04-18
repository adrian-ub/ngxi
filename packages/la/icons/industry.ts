import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laIndustryIcon],svg[la-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5v5.469l-3 1.781V9.219l-1.5.937L12 12.25V9.219l-1.5.937l-5 3l-.5.281V27h22V5zm2 2h3v18H7V14.531l3-1.781v3.031l1.5-.937L15 12.75v3.031l1.5-.937l5-3l.5-.281zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaIndustryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
