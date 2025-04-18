import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPkgIcon],svg[logos-pkg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M130.307 0L256 180.877l-124.098 47.816v-24.72l9.772-5.985zm-4.626.004l-9.424 164.25l-.776 13.526l-1.164 20.288l9.756 5.786v24.811l-33.031-12.718l-16.48-6.346C49.841 200.08 25.1 190.555 0 180.89l17.84-25.676l8.912-12.827z"></svg:path>`,
})
export class LogosPkgIcon {
  readonly viewBox = input("0 0 256 229")
  readonly width = input("1.12em")
  readonly height = input("1em")
}
