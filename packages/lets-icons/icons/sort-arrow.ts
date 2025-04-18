import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortArrowIcon],svg[lets-icons-sort-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 2l-.707-.707L8 .586l.707.707zm1 15a1 1 0 1 1-2 0zM2.293 6.293l5-5l1.414 1.414l-5 5zm6.414-5l5 5l-1.414 1.414l-5-5zM9 2v15H7V2zm7 20l-.707.707l.707.707l.707-.707zm1-15a1 1 0 1 0-2 0zm-6.707 10.707l5 5l1.414-1.414l-5-5zm6.414 5l5-5l-1.414-1.414l-5 5zM17 22V7h-2v15z"></svg:path>`,
})
export class LetsIconsSortArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
