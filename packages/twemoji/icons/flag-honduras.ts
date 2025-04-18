import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagHondurasIcon],svg[twemoji-flag-honduras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M0 14h36v8H0z"></svg:path><svg:path fill="#0156A3" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0z"></svg:path><svg:path fill="#2657A7" d="m18.265 17.76l-.249-.766l-.249.766h-.806l.652.473l-.249.767l.652-.474l.652.474l-.249-.767l.652-.473zm5.332 2.48l-.249.766l.652-.473l.652.473l-.249-.766l.652-.473h-.806L24 19l-.249.767h-.806zm.652-4.48L24 14.994l-.249.766h-.806l.652.473l-.249.767l.652-.474l.652.474l-.249-.767l.652-.473zm-12.707 4.48l-.249.766l.652-.473l.652.473l-.249-.766l.652-.473h-.806L11.945 19l-.249.767h-.806zm.652-4.48l-.249-.766l-.249.766h-.806l.652.473l-.249.767l.652-.474l.652.474l-.249-.767l.652-.473z"></svg:path>`,
})
export class TwemojiFlagHondurasIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
