import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSpeechless1FilledIcon],svg[tdesign-speechless-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M11 9H6v2h3v6h5v-2h-3zm7 0h-4v2h4z"></svg:path>`,
})
export class TdesignSpeechless1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
