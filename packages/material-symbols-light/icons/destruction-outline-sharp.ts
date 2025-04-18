import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDestructionOutlineSharpIcon],svg[material-symbols-light-destruction-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20.23v-6.442h16v6.443zm1-1h14v-4.442H5zm1.66-6.941l-3.622-2.1l5.096-.866l-1.393-5.048l4.263 3.044L13.6 2.77l.865 5.154l5.048-1.394l-3.025 4.263l2.647 1.496h-2.05l-2.073-1.173l2.05-2.873l-3.408.937l-.585-3.477l-1.742 3.075l-2.873-2.05l.937 3.407l-3.42.585l2.616 1.57zm4.977 0"></svg:path>`,
})
export class MaterialSymbolsLightDestructionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
