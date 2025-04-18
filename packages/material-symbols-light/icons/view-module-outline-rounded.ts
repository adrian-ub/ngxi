import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewModuleOutlineRoundedIcon],svg[material-symbols-light-view-module-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.044 16.385v-8.77q0-.666.475-1.14Q4.993 6 5.659 6h12.706q.667 0 1.141.475q.475.474.475 1.14v8.77q0 .666-.475 1.14q-.474.475-1.14.475H5.66q-.667 0-1.141-.475q-.475-.474-.475-1.14ZM15.002 11.5h3.979V7.615q0-.269-.173-.442T18.365 7h-3.363v4.5Zm-4.979 0h3.979V7h-3.979v4.5Zm-4.979 0h3.98V7H5.66q-.27 0-.443.173t-.173.442V11.5ZM5.66 17h3.363v-4.5H5.044v3.885q0 .269.173.442T5.66 17Zm4.363 0h3.979v-4.5h-3.979V17Zm4.979 0h3.363q.27 0 .443-.173t.173-.442V12.5H15V17Z"></svg:path>`,
})
export class MaterialSymbolsLightViewModuleOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
