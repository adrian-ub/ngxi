import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAdd1ExpandCrossButtonsButtonMoreRemovePlusAddIcon],svg[streamline-interface-add-1-expand-cross-buttons-button-more-remove-plus-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .54v13M.5 7h13"></svg:path>`,
})
export class StreamlineInterfaceAdd1ExpandCrossButtonsButtonMoreRemovePlusAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
