import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloseCircleIcon],svg[tdesign-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M7.403 15.182L10.586 12L7.403 8.818l1.415-1.415L12 10.586l3.182-3.182l1.414 1.414L13.414 12l3.182 3.182l-1.414 1.414L12 13.414l-3.182 3.182z"></svg:path>`,
})
export class TdesignCloseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
