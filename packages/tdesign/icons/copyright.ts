import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCopyrightIcon],svg[tdesign-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M9.525 9.526a3.5 3.5 0 0 0 4.95 4.95l.707-.708l1.414 1.415l-.707.707a5.5 5.5 0 1 1 0-7.778l.707.707l-1.414 1.414l-.707-.707a3.5 3.5 0 0 0-4.95 0"></svg:path>`,
})
export class TdesignCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
