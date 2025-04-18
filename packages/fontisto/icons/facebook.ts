import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoFacebookIcon],svg[fontisto-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.462.173v3.808h-2.265a2.11 2.11 0 0 0-1.675.521l.002-.002a2.37 2.37 0 0 0-.432 1.566v-.008v2.726h4.229l-.56 4.27H8.098V24H3.681V13.053H.001V8.784h3.68V5.639a5.56 5.56 0 0 1 1.502-4.162l-.003.003A5.42 5.42 0 0 1 9.185.002h-.013a24 24 0 0 1 3.406.185l-.117-.012z"></svg:path>`,
})
export class FontistoFacebookIcon {
  readonly viewBox = input("0 0 12 24")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
