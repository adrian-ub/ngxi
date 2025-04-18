import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSprayCanColorColorsDesignPaintPaintingSprayIcon],svg[streamline-interface-edit-spray-can-color-colors-design-paint-painting-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="6" height="9" x=".5" y="4.5" rx="1"></svg:rect><svg:path d="M3.5 2v2.5m5-3l5-1m-5 3l5 1M2.5 2h2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSprayCanColorColorsDesignPaintPaintingSprayIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
