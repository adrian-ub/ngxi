import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconLibraryIcon],svg[codicon-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5 2.5l.5-.5h2l.5.5v11l-.5.5h-2l-.5-.5zM6 3v10h1V3zm3.171.345l.299-.641l1.88-.684l.64.299l3.762 10.336l-.299.641l-1.879.684l-.64-.299zm1.11.128l3.42 9.396l.94-.341l-3.42-9.397zM1 2.5l.5-.5h2l.5.5v11l-.5.5h-2l-.5-.5zM2 3v10h1V3z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconLibraryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
