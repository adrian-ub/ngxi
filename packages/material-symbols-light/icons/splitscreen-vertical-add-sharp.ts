import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenVerticalAddSharpIcon],svg[material-symbols-light-splitscreen-vertical-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h6.635v16zm9.385 0V4H20v10.427q-.154-.021-.308-.032q-.153-.01-.307-.01q-2.075 0-3.538 1.455t-1.462 3.539q0 .166.015.316t.027.305zM19 22.23V20h-2.23v-1H19v-2.23h1V19h2.23v1H20v2.23z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenVerticalAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
