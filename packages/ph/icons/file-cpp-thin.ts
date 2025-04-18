import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileCppThinIcon],svg[ph-file-cpp-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 180c0 13.23 9 24 20 24a18.15 18.15 0 0 0 13.11-5.9a4 4 0 1 1 5.78 5.54A26.1 26.1 0 0 1 64 212c-15.44 0-28-14.35-28-32s12.56-32 28-32a26.1 26.1 0 0 1 18.89 8.36a4 4 0 1 1-5.78 5.54A18.15 18.15 0 0 0 64 156c-11 0-20 10.77-20 24m160-88h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88v24a4 4 0 0 1-8 0Zm-48-8h42.34L156 41.65Zm-8 92h-16v-16a4 4 0 0 0-8 0v16h-16a4 4 0 0 0 0 8h16v16a4 4 0 0 0 8 0v-16h16a4 4 0 0 0 0-8m68 0h-16v-16a4 4 0 0 0-8 0v16h-16a4 4 0 0 0 0 8h16v16a4 4 0 0 0 8 0v-16h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhFileCppThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
