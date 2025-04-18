import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSpeechlessFilledIcon],svg[tdesign-speechless-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-3 7v-2H9v2z"></svg:path>`,
})
export class TdesignSpeechlessFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
