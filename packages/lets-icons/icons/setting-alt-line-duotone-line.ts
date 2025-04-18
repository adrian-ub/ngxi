import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSettingAltLineDuotoneLineIcon],svg[lets-icons-setting-alt-line-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M2.289 12c0 .519.264.994.793 1.944L4.43 16.37l1.426 2.381c.559.933.838 1.4 1.287 1.66c.45.259.993.267 2.08.285L12 20.74l2.775-.044c1.088-.018 1.631-.026 2.08-.286s.73-.726 1.288-1.659l1.426-2.381l1.35-2.426c.528-.95.792-1.425.792-1.944s-.264-.994-.793-1.944L19.57 7.63l-1.426-2.381c-.559-.933-.838-1.4-1.287-1.66c-.45-.259-.993-.267-2.08-.285L12 3.26l-2.775.044c-1.088.018-1.631.026-2.08.286s-.73.726-1.288 1.659L4.43 7.63l-1.35 2.426c-.528.95-.792 1.425-.792 1.944M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M3.082 13.945c-.529-.95-.793-1.426-.793-1.945s.264-.994.793-1.944L4.43 7.63l1.426-2.381c.559-.933.838-1.4 1.287-1.66c.45-.259.993-.267 2.08-.285L12 3.26l2.775.044c1.088.018 1.631.026 2.08.286s.73.726 1.288 1.659L19.57 7.63l1.35 2.426c.528.95.792 1.425.792 1.944s-.264.994-.793 1.944L19.57 16.37l-1.426 2.381c-.559.933-.838 1.4-1.287 1.66c-.45.259-.993.267-2.08.285L12 20.74l-2.775-.044c-1.088-.018-1.631-.026-2.08-.286s-.73-.726-1.288-1.659L4.43 16.37z"></svg:path><svg:circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.2"></svg:circle></svg:g>`,
})
export class LetsIconsSettingAltLineDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
