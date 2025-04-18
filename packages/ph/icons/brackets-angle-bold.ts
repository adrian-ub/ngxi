import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBracketsAngleBoldIcon],svg[ph-brackets-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.12 46.44L38.22 128l51.9 81.56a12 12 0 1 1-20.24 12.88l-56-88a12 12 0 0 1 0-12.88l56-88a12 12 0 0 1 20.24 12.88m152 75.12l-56-88a12 12 0 1 0-20.24 12.88l51.9 81.56l-51.9 81.56a12 12 0 1 0 20.24 12.88l56-88a12 12 0 0 0 0-12.88"></svg:path>`,
})
export class PhBracketsAngleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
