import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignContrastFilledIcon],svg[tdesign-contrast-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m7.5 11a7.5 7.5 0 0 1-7.5 7.5v-15a7.5 7.5 0 0 1 7.5 7.5"></svg:path>`,
})
export class TdesignContrastFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
