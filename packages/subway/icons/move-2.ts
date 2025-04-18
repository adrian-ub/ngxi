import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMove2Icon],svg[subway-move-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.5 0H0v209.5L81.5 128l104.7 104.7l46.5-46.5L128 81.5zm-23.3 279.3L81.5 384L0 302.5V512h209.5L128 430.5l104.7-104.7zM302.5 0L384 81.5L279.3 186.2l46.5 46.5L430.5 128l81.5 81.5V0zm23.3 279.3l-46.5 46.5L384 430.5L302.5 512H512V302.5L430.5 384z"></svg:path>`,
})
export class SubwayMove2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
