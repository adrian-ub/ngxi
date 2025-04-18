import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSignLanguageIcon],svg[ic-sharp-sign-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.49 13l-1.39-2.7L12.49 9L19 15.2V24H4.5v-2H10v-1H3v-2h7v-1H2v-2h8v-1H3.5v-2zm-.71-5.88c-.84.4-1.17.62-1.63 1.19L6.76 4.74l1.45-1.38zM9.64 9.21a3.46 3.46 0 0 0-.2 1.79h-.86L5.62 7.89l1.45-1.38zm12.34 3.13L22 3.35l-1.9-.1l-1 2.86L13.3 0l-1.45 1.38l4.09 4.3l-.73.69L9.74.64L8.3 2l3.36 3.53l1.06 1.11l2.65 2.33l5.08 4.83z"></svg:path>`,
})
export class IcSharpSignLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
