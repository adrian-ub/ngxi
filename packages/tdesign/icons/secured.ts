import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSecuredIcon],svg[tdesign-secured-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .44l10 3.5V12c0 4.127-2.533 7.012-4.896 8.803a19.7 19.7 0 0 1-4.65 2.595l-.087.033l-.025.009l-.007.002l-.003.001c-.001 0-.002 0-.332-.943l-.331.944h-.001l-.003-.002l-.007-.002l-.025-.01l-.087-.032a18 18 0 0 1-1.39-.606a20 20 0 0 1-3.26-1.989C4.534 19.012 2 16.127 2 12V3.94zm0 22.06l-.331.944l.331.116l.331-.116zm0-1.072l.009-.004a17.8 17.8 0 0 0 3.887-2.215C18.034 17.59 20 15.223 20 12V5.36l-8-2.8l-8 2.8V12c0 3.223 1.966 5.588 4.104 7.21A17.8 17.8 0 0 0 12 21.428m6.072-13.085l-7.071 7.071l-4.243-4.242l1.415-1.415L11 12.586l5.657-5.657z"></svg:path>`,
})
export class TdesignSecuredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
