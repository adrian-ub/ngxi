import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFolderSimpleMinusDuotoneIcon],svg[ph-folder-simple-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 88v112.89a7.11 7.11 0 0 1-7.11 7.11H40a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6L128 80h88a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176.89A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16m0 128H40V64h53.33l29.87 22.4A8 8 0 0 0 128 88h88Zm-56-56a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhFolderSimpleMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
