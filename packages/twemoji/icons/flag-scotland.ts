import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagScotlandIcon],svg[twemoji-flag-scotland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#0065BD" d="M13 18S0 8.586 0 8.895v18.21C0 27.414 13 18 13 18m5 3S3.697 31 4.07 31h27.859C32.303 31 18 21 18 21m5-3s13 9.414 13 9.105V8.895C36 8.586 23 18 23 18m-5-3S3.697 5 4.07 5h27.859C32.303 5 18 15 18 15"></svg:path>`,
})
export class TwemojiFlagScotlandIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
