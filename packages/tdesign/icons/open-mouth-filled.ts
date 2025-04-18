import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignOpenMouthFilledIcon],svg[tdesign-open-mouth-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M9 12V8H7v4zm8 0V8h-2v4zm0 6v-4H7v4z"></svg:path>`,
})
export class TdesignOpenMouthFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
