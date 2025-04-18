import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiViewCompactIcon],svg[ooui-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4v4H2zm12 0h4v4h-4zM8 2h4v4H8zM2 14h4v4H2zm12 0h4v4h-4zm-6 0h4v4H8zM2 8h4v4H2zm12 0h4v4h-4zM8 8h4v4H8z"></svg:path>`,
})
export class OouiViewCompactIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
