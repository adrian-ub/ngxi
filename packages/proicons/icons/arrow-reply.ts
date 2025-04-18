import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowReplyIcon],svg[proicons-arrow-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.75 18.219c0-2.352 0-3.527-.383-4.455a5.06 5.06 0 0 0-2.743-2.743c-.928-.383-2.103-.383-4.455-.383H3.871m4.236-4.857L4.31 9.577c-.293.293-.44.677-.44 1.061m4.236 4.857L4.31 11.699a1.5 1.5 0 0 1-.44-1.061"></svg:path>`,
})
export class ProiconsArrowReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
