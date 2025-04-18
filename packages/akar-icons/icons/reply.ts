import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsReplyIcon],svg[akar-icons-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M2 10.981L8.973 2v4.99c11.952 0 13.316 9.688 12.984 15.01l-.007-.041c-.502-2.685-.712-6.986-12.977-6.986v4.99L2 10.98z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg:path></svg:g>`,
})
export class AkarIconsReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
