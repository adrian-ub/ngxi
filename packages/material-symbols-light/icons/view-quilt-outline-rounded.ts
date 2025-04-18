import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewQuiltOutlineRoundedIcon],svg[material-symbols-light-view-quilt-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.385 16.385v-8.77q0-.67.472-1.143Q5.329 6 6 6h12q.671 0 1.143.472t.472 1.143v8.77q0 .67-.472 1.143Q18.671 18 18 18H6q-.671 0-1.143-.472t-.472-1.143Zm5.69-8.77v3.27q0 .23.192.423q.193.192.423.192H18q.23 0 .423-.192q.192-.193.192-.423v-3.27q0-.23-.192-.423Q18.231 7 18 7h-7.31q-.23 0-.423.192q-.192.193-.192.423ZM18 12.5h-2.537q-.23 0-.423.192q-.192.193-.192.423v3.27q0 .23.192.423q.193.192.423.192H18q.23 0 .423-.192q.192-.193.192-.423v-3.27q0-.23-.192-.423q-.192-.192-.423-.192Zm-7.925.615v3.27q0 .23.192.423q.193.192.423.192h2.543q.23 0 .423-.192q.192-.193.192-.423v-3.27q0-.23-.192-.423q-.193-.192-.423-.192H10.69q-.23 0-.423.192q-.192.193-.192.423ZM6 17h2.46q.23 0 .423-.192q.192-.193.192-.423v-8.77q0-.23-.192-.423Q8.69 7 8.46 7H6q-.23 0-.423.192q-.192.193-.192.423v8.77q0 .23.192.423Q5.769 17 6 17Z"></svg:path>`,
})
export class MaterialSymbolsLightViewQuiltOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
