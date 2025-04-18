import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShutupFilledIcon],svg[tdesign-shutup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11M10 9H6v2h4zm8 0h-4v2h4zm-6 4.586l-1-1L9.586 14l1 1l-1 1L11 17.414l1-1l1 1L14.414 16l-1-1l1-1L13 12.586z"></svg:path>`,
})
export class TdesignShutupFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
