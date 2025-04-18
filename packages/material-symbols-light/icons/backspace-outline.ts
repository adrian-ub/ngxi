import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackspaceOutlineIcon],svg[material-symbols-light-backspace-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.054 15.308l2.6-2.6l2.6 2.6l.707-.708l-2.6-2.6l2.6-2.6l-.707-.708l-2.6 2.6l-2.6-2.6l-.708.708l2.6 2.6l-2.6 2.6zM9.173 19q-.383 0-.727-.166t-.565-.461L3 12l4.88-6.373q.223-.294.566-.46T9.173 5h10.212q.666 0 1.14.475T21 6.615v10.77q0 .666-.475 1.14t-1.14.475zM4.25 12l4.423 5.77q.096.114.221.172t.279.058h10.212q.269 0 .442-.173t.173-.443V6.616q0-.27-.173-.443T19.385 6H9.173q-.154 0-.279.058t-.221.173zm10.02 0"></svg:path>`,
})
export class MaterialSymbolsLightBackspaceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
