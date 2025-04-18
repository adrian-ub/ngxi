import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditMagnetDesignMagnetSnapSuppliesToToolIcon],svg[streamline-interface-edit-magnet-design-magnet-snap-supplies-to-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.81 12.07a4.86 4.86 0 0 1-6.88-6.88L6.62.5l2.19 2.19L4.51 7A1.77 1.77 0 0 0 7 9.49l4.3-4.3l2.2 2.19Zm.38-4.76l2.19 2.19M4.5 2.62l2.19 2.19"></svg:path>`,
})
export class StreamlineInterfaceEditMagnetDesignMagnetSnapSuppliesToToolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
