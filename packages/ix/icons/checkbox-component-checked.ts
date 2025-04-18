import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxComponentCheckedIcon],svg[ix-checkbox-component-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-21.333 21.333H85.333v341.334h341.334zm-54.16 56.242l22.986 15.516l-153.408 227.271l-123.89-123.89l19.61-19.61L237.91 340.97z"></svg:path>`,
})
export class IxCheckboxComponentCheckedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
