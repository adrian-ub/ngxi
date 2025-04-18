import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8GenericTextIcon],svg[icons8-generic-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6L8 26h2l2.094-6h7.812L22 26h2L17 6zm1 2.844L19.188 18h-6.375z"></svg:path>`,
})
export class Icons8GenericTextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
