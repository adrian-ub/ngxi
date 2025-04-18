import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilImage1Icon],svg[cil-image1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M1.875 1.875v20.25h20.25V1.875zm18.75 1.5v6.454l-3.036-3.036l-3.245 3.245L9.656 5.35l-6.281 6.281V3.374zm0 12.944l-5.221-5.221l2.185-2.185l3.036 3.036zm-17.25 4.306v-6.872l6.281-6.281l10.969 10.969v2.185z" fill="currentColor"></svg:path>`,
})
export class CilImage1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
