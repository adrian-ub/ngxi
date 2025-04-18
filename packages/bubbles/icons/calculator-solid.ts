import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCalculatorSolidIcon],svg[bubbles-calculator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.765 5.973V17.01h10.542V5.973zm-.99-.495v11.74c0 .432.35.782.783.782h10.956c.432 0 .783-.35.783-.783V.783A.783.783 0 0 0 14.514 0H3.558a.783.783 0 0 0-.783.783zm.99-.495h10.542V.99H3.765zm2.224 4.055a.694.694 0 1 0 0-1.388a.694.694 0 0 0 0 1.388m6.8 2.373a.694.694 0 1 1-1.387 0a.694.694 0 0 1 1.387 0M8.293 13.98a.482.482 0 1 0 0 .964h4.192a.482.482 0 0 0 0-.965zm-2.304 1.193a.694.694 0 1 0 0-1.388a.694.694 0 0 0 0 1.388m.694-3.762a.694.694 0 1 1-1.388 0a.694.694 0 0 1 1.388 0M9.75 8.344a.694.694 0 1 1-1.388 0a.694.694 0 0 1 1.388 0m2.345.694a.694.694 0 1 0 0-1.388a.694.694 0 0 0 0 1.388M9.75 11.41a.694.694 0 1 1-1.388 0a.694.694 0 0 1 1.388 0" clip-rule="evenodd"></svg:path><svg:path d="M12.317 2.287c.266 0 .482.215.482.482v.762a.482.482 0 1 1-.964 0v-.762c0-.267.216-.482.482-.482"></svg:path></svg:g>`,
})
export class BubblesCalculatorSolidIcon {
  readonly viewBox = input("0 0 18 18")
  readonly width = input("1em")
  readonly height = input("1em")
}
