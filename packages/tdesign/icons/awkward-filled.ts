import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAwkwardFilledIcon],svg[tdesign-awkward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-2 5.667V12h-2v2.667zM19 15v-3h-2v3z"></svg:path>`,
})
export class TdesignAwkwardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
