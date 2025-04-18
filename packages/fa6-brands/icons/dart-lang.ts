import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsDartLangIcon],svg[fa6-brands-dart-lang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M378.6 78.9c-2.8-.1-5.6-.2-8.5-.2H106l143.2-72C256.6 2.3 268 0 279.6 0c13.5 0 29.4 9.2 37 16.8l62 62zM107.3 96.5h262.8c16 0 25.4 1.4 35.4 9.3L512 212.2V421l-79.3.7zM96.5 373V110.8l323.8 323.8l.7 77.4H208.8l-98.1-98.2c-11.3-11.3-14.2-15.3-14.2-40.8M78.7 105.3V373c0 3.3.1 6.3.2 9.1l-62-62C6.5 309.3 0 294.3 0 279.6c0-6.8 3.9-17.5 6.7-23.6z"></svg:path>`,
})
export class Fa6BrandsDartLangIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
