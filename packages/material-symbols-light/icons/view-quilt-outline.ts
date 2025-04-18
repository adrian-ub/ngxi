import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewQuiltOutlineIcon],svg[material-symbols-light-view-quilt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.385v-8.77q0-.666.497-1.14Q4.994 6 5.692 6h12.616q.698 0 1.195.475q.497.474.497 1.14v8.77q0 .666-.497 1.14q-.497.475-1.195.475H5.692q-.698 0-1.195-.475Q4 17.052 4 16.386M9.94 11.5H19V7.616q0-.231-.212-.424T18.309 7H9.94zm5.024 5.5h3.344q.269 0 .48-.192t.212-.424V12.5h-4.036zM9.94 17h4.022v-4.5h-4.02zm-4.249 0H8.94V7H5.692q-.269 0-.48.192T5 7.616v8.769q0 .23.212.423t.48.192"></svg:path>`,
})
export class MaterialSymbolsLightViewQuiltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
