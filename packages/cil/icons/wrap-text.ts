import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWrapTextIcon],svg[cil-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 232h160v32H16zm0 160h392v32H16zM408 72H16v32h392c30.878 0 56 28.71 56 64s-25.122 64-56 64h-63.2v-69.228L210 249l134.8 83.785V264H408c48.523 0 88-43.065 88-96s-39.477-96-88-96m-95.2 203.217L270 248.609l42.8-27.381Z"></svg:path>`,
})
export class CilWrapTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
