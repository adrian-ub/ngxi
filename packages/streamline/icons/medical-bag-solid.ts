import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMedicalBagSolidIcon],svg[streamline-medical-bag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.999 0c-.474 0-.96.153-1.343.469c-.389.32-.658.8-.658 1.354v1.543H1.5C.69 3.366 0 4 0 4.826v7.684c0 .825.69 1.46 1.5 1.46h11c.81 0 1.5-.635 1.5-1.46V4.826c0-.825-.69-1.46-1.5-1.46h-1.498V1.823c0-.553-.269-1.034-.658-1.354A2.12 2.12 0 0 0 9.001 0H5Zm4.003 3.366V2H4.998v1.366zM4.375 8.668c0-.345.28-.625.625-.625h1.375V6.668a.625.625 0 1 1 1.25 0v1.375H9a.625.625 0 1 1 0 1.25H7.625v1.375a.625.625 0 1 1-1.25 0V9.293H5a.625.625 0 0 1-.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMedicalBagSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
