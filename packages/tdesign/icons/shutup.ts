import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShutupIcon],svg[tdesign-shutup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H6zm8 0h4v2h-4zm-3 3.586l1 1l1-1L14.414 14l-1 1l1 1L13 17.414l-1-1l-1 1L9.586 16l1-1l-1-1z"></svg:path>`,
})
export class TdesignShutupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
