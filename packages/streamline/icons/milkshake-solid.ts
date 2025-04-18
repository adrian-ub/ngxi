import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMilkshakeSolidIcon],svg[streamline-milkshake-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.722.067a.75.75 0 0 1 .487.942l-.51 1.603a4.17 4.17 0 0 1 1.576 3.012H12a.75.75 0 0 1 0 1.5h-.768l-.373 5.22a1.75 1.75 0 0 1-1.746 1.625H5.108a1.75 1.75 0 0 1-1.745-1.626l-.373-5.22h-.77a.75.75 0 1 1 0-1.5h.725A4.173 4.173 0 0 1 8.351 1.9L8.78.554a.75.75 0 0 1 .943-.487ZM4.45 5.624a2.673 2.673 0 0 1 5.32 0zm5.156 3.194l.12-1.694H4.494l.122 1.694h4.992Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMilkshakeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
