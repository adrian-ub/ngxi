import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCropIcon],svg[fontisto-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.455 15.273h2.182V6.546a2.18 2.18 0 0 0-2.182-2.182H8.728v2.182h8.727zm-10.91 2.182V0H4.363v4.364H-.001v2.182h4.364v10.909c0 1.205.977 2.182 2.182 2.182h10.909v4.364h2.182v-4.364H24v-2.182z"></svg:path>`,
})
export class FontistoCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
