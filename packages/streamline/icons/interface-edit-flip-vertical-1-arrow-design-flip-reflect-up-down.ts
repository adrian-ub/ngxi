import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipVertical1ArrowDesignFlipReflectUpDownIcon],svg[streamline-interface-edit-flip-vertical-1-arrow-design-flip-reflect-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.25 1.5L7.18 4.43a.27.27 0 0 1-.36 0L3.75 1.5m6.5 11L7.18 9.57a.27.27 0 0 0-.36 0L3.75 12.5M13.5 7h-1m-2 0h-1m-2 0h-1m-2 0h-1m-2 0h-1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipVertical1ArrowDesignFlipReflectUpDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
