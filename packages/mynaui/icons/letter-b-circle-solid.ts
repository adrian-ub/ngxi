import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterBCircleSolidIcon],svg[mynaui-letter-b-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.241 9.8c.064.602-.204 1.191-.761 1.45h-3.23v-2.5h2.921c.62 0 1.005.425 1.07 1.05m-3.991 5.45v-2.5h3.23c.557.259.825.848.761 1.45c-.065.625-.45 1.05-1.07 1.05z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.671c1.572 0 2.437-1.204 2.562-2.393c.085-.806-.153-1.706-.767-2.357c.614-.651.852-1.551.767-2.357c-.125-1.19-.99-2.393-2.562-2.393z"></svg:path></svg:g>`,
})
export class MynauiLetterBCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
