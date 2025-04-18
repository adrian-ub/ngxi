import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeAirplaneIcon],svg[icomoon-free-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9.999L9.143 7.142L16 1.999l-2-2l-8.571 3.429L2.731.729C1.953-.049.867-.235.317.315s-.364 1.636.414 2.414l2.698 2.698L0 13.999l2 2l5.144-6.857l2.857 2.857v4h2l1-3l3-1v-2h-4z"></svg:path>`,
})
export class IcomoonFreeAirplaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
