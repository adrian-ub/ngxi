import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJavaClassIcon],svg[catppuccin-java-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M13.825 10.605V5.393a1.282 1.287 0 0 0-.647-1.116l-4.53-2.605a1.307 1.313 0 0 0-1.295 0L2.822 4.277c-.4.23-.647.657-.647 1.117v5.212c0 .46.246.886.647 1.116l4.53 2.605a1.307 1.313 0 0 0 1.295 0l4.531-2.605c.4-.231.647-.657.647-1.117M8 14.5V8m0 0l5.65-3.276m-11.3 0L8 8"></svg:path>`,
})
export class CatppuccinJavaClassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
