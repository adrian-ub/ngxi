import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSuitcaseBagIcon],svg[marketeq-suitcase-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 6.25h8.334a6.25 6.25 0 0 1 6.25 6.25v2.083H14.583V12.5a6.25 6.25 0 0 1 6.25-6.25M22.917 25h4.166"></svg:path><svg:path stroke="#306CFE" d="m41.313 29.98l-1.5 11.937a2.084 2.084 0 0 1-2.084 1.833H12.25a2.084 2.084 0 0 1-2.083-1.833l-1.5-11.938"></svg:path><svg:path stroke="#306CFE" d="m42.333 29.646l-9.437 3.146a25 25 0 0 1-15.792 0l-9.437-3.146a2.084 2.084 0 0 1-1.417-2.084V14.584h37.5v13.084a2.08 2.08 0 0 1-1.417 1.979"></svg:path></svg:g>`,
})
export class MarketeqSuitcaseBagIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
