import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqConversationIcon],svg[marketeq-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.188 17.104a13.06 13.06 0 0 1 6.562 11.021a12.13 12.13 0 0 1-2.396 7.292l2.396 8.333l-8.333-3.604a17.7 17.7 0 0 1-7.292 1.52a15.56 15.56 0 0 1-14.812-9.27"></svg:path><svg:path stroke="#306CFE" d="M37.5 19.792c0 7.479-7 13.541-15.625 13.541a17.7 17.7 0 0 1-7.292-1.52l-1.354.583l-6.979 3.02l2.396-8.333a12.13 12.13 0 0 1-2.396-7.291c0-7.48 7-13.542 15.625-13.542c7.563 0 13.875 4.667 15.313 10.854c.21.88.314 1.783.312 2.688"></svg:path></svg:g>`,
})
export class MarketeqConversationIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
