import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTd1x1Icon],svg[flag-td-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#002664" d="M0 0h171.2v512H0z"></svg:path><svg:path fill="#c60c30" d="M340.8 0H512v512H340.8z"></svg:path><svg:path fill="#fecb00" d="M171.2 0h169.6v512H171.2z"></svg:path></svg:g>`,
})
export class FlagTd1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
