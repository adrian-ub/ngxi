import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAddCircleButtonRemoveCrossAddButtonsPlusCircleIcon],svg[streamline-interface-add-circle-button-remove-cross-add-buttons-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 4v6M4 7h6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAddCircleButtonRemoveCrossAddButtonsPlusCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
