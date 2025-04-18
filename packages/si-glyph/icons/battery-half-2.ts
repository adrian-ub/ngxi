import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphBatteryHalf2Icon],svg[si-glyph-battery-half-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.062 13.472a.48.48 0 0 0 .471.487h3.936a.48.48 0 0 0 .47-.487V8.094l-4.876 2.065v3.313z"></svg:path><svg:path d="M12.252 1H11V0H8.023v1H6.715c-.936 0-1.694.492-1.694 1.417v12.125c0 .924.759 1.458 1.694 1.458h5.536c.936 0 1.748-.535 1.748-1.458V2.417C14 1.492 13.188 1 12.252 1M13 14c0 .516-.484 1-1 1H7c-.515 0-1-.484-1-1V3c0-.514.485-1 1-1h5c.516 0 1 .485 1 1z"></svg:path></svg:g>`,
})
export class SiGlyphBatteryHalf2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
