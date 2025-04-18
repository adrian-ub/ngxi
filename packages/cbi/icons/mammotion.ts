import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiMammotionIcon],svg[cbi-mammotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.042 14.076l-1.2 2.612l3.66.091l.869-1.979a.16.16 0 0 1 .073-.077L22 12.976Zm.414-.841l3.996-.621l.828-1.759l-1.759-3.634l-3.065.505l-1.927 4.164l2.69-.388zm-4.979-4.643l-2.03 4.216l1.875 3.828l4.125-8.729zm-5.056.763L2 16.675l3.64.104l3.764-8.057Z"></svg:path>`,
})
export class CbiMammotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
