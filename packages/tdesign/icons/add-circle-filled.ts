import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAddCircleFilledIcon],svg[tdesign-add-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m1 12v4.5h-2V13H6.5v-2H11V6.5h2V11h4.5v2z"></svg:path>`,
})
export class TdesignAddCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
