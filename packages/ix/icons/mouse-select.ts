import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMouseSelectIcon],svg[ix-mouse-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m62.226 62.127l383.887 103.687l-86.175 86.23l81.98 81.975l-107.88 107.883l-81.951-81.975l-86.175 86.2zm60.526 60.54l65.109 241.13l64.226-64.22l81.929 81.97l47.552-47.53l-81.961-81.963l64.211-64.278z"></svg:path>`,
})
export class IxMouseSelectIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
