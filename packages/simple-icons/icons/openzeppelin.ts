import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsOpenzeppelinIcon],svg[simple-icons-openzeppelin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.783 24H9.317l2.196-3.69a5.23 5.23 0 0 1 4.494-2.558h6.775ZM1.217 0h21.566l-3.718 6.247H1.217ZM9.76 9.763a5.73 5.73 0 0 1 4.92-2.795h4.01L8.498 24h-7.26Z"></svg:path>`,
})
export class SimpleIconsOpenzeppelinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
