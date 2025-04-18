import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconChevronUpIcon],svg[codicon-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.024 5.928l-4.357 4.357l-.62-.618L7.716 5h.618L13 9.667l-.619.618z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconChevronUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
