import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwitchAccess2Icon],svg[material-symbols-switch-access-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20v-4h2v2h2v2zm6 0v-2h2v-2h2v4zM13 8V4h4v2h-2v2zm8 0V6h-2V4h4v4zm-4 8l-1.4-1.4l1.575-1.6H6v-2h11.175L15.6 9.4L17 8l4 4zM1 20V4h10v5H4v6h7v5z"></svg:path>`,
})
export class MaterialSymbolsSwitchAccess2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
