import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightToolsFlatHeadOutlineIcon],svg[material-symbols-light-tools-flat-head-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.866 20v-1h6.269v1zm0-2l-.847-5.942L9.79 5h4.423l1.769 7.058L15.135 18zm.859-1h4.55l.627-4.5H9.073zm-.54-5.5h5.63L13.45 6h-2.9zm5.09 5.5h-4.55z"></svg:path>`,
})
export class MaterialSymbolsLightToolsFlatHeadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
