import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignKeyFilledIcon],svg[tdesign-key-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.757 7.757A6 6 0 0 1 13.917 11H22v2h-1.5v2h-2v-2h-1v2.999h-2V13h-1.583a6 6 0 1 1-10.16-5.243"></svg:path>`,
})
export class TdesignKeyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
