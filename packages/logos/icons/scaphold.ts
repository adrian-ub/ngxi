import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosScapholdIcon],svg[logos-scaphold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00ACA1" d="M206.306-.001V18.07H0v73.185h17.669v21.083H0v48.791h224.076v21.082h-17.77v21.986H0v69.271h51.502v-19.276H256v-71.981h-16.263v-21.082H256v-48.791H33.331V91.255H51.2V68.969H256V-.001z"></svg:path>`,
})
export class LogosScapholdIcon {
  readonly viewBox = input("0 0 256 274")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
