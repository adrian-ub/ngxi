import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetwork4gIcon],svg[streamline-cellular-network-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.527 4.846c-.773-.547-1.633-.853-2.511-.892c-.877.042-1.734.348-2.505.895M2.098 2.828A7.9 7.9 0 0 1 7.003.953a7.9 7.9 0 0 1 4.9 1.875m-1.689 8.324h1.306v.87c0 .722-.584 1.307-1.306 1.307h-.87a1.306 1.306 0 0 1-1.306-1.306V9.41c0-.72.585-1.306 1.306-1.306h.87c.569 0 1.053.364 1.232.871M6.45 12.023H2.414a.316.316 0 0 1-.316-.317v0c0-.076.027-.15.078-.208l2.879-3.29a.3.3 0 0 1 .225-.103v0a.3.3 0 0 1 .3.3v4.924"></svg:path>`,
})
export class StreamlineCellularNetwork4gIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
