import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSketchIcon],svg[vscode-icons-file-type-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fdb300" d="M8.109 4.26L16 3.433l7.891.828L30 12.4L16 28.567L2 12.4Z"></svg:path><svg:path fill="#ea6c00" d="M7.671 12.395L16 28.567L2 12.395zm16.658 0L16 28.567l14-16.172z"></svg:path><svg:path fill="#fdad00" d="M7.671 12.395h16.658L16 28.567z"></svg:path><svg:path fill="#fdd231" d="m16 3.433l-7.891.827l-.438 8.135zm0 0l7.891.827l.438 8.135z"></svg:path><svg:path fill="#fdad00" d="M30 12.395L23.891 4.26l.438 8.135zm-28 0L8.109 4.26l-.438 8.135z"></svg:path><svg:path fill="#feeeb7" d="m16 3.433l-8.329 8.962h16.658z"></svg:path>`,
})
export class VscodeIconsFileTypeSketchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
