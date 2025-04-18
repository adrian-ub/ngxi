import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixControlLabelIcon],svg[ix-control-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336.813 313.438h-143l-47.125 134.333h-44.959L238.229 64h56.063l137.583 383.771h-47.937zm-13.271-36.563l-34.125-101.021q-13-38.459-23.563-73.937q-9.75 32.77-23.833 74.208l-34.938 100.75z"></svg:path>`,
})
export class IxControlLabelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
