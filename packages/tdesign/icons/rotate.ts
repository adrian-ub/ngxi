import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRotateIcon],svg[tdesign-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0 0 18a9 9 0 0 0 8.252-5.4l.4-.917l1.833.801l-.4.916A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11v2l-4.4-3.3l1.2-1.6l.928.696A9.004 9.004 0 0 0 12 3"></svg:path>`,
})
export class TdesignRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
