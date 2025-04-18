import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PoultryLegIcon],svg[f7-poultry-leg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.923 37.912l-4.585 4.4q.525 2.88.067 4.69c-.456 1.809-4.466 5.557-6.53 4.156q-1.899-1.29-2.442-4.905a1.02 1.02 0 0 0-.71-.822q-2.155-.654-2.877-1.186c-1.359-1-1.742-2.46-1.83-3.206c-.21-1.793 1.603-2.679 4.389-3.51q2.785-.83 6.321.317l4.654-3.908l-.356-.321a1.016 1.016 0 0 1 .074-1.571l1.176-.873Q21.32 15.269 28.44 9.79c7.925-6.097 15.477-8.413 21.315-1.808c5.837 6.605 3.28 13.598-3.533 21.93q-5.337 6.527-19.956 7.207c-.225.01-.44.095-.612.241l-1.717 1.464a1.016 1.016 0 0 1-1.482-.177z"></svg:path>`,
})
export class F7PoultryLegIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
