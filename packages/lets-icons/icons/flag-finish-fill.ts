import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlagFinishFillIcon],svg[lets-icons-flag-finish-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6 5.5V13h4.382c.3 0 .451 0 .572.075c.12.074.188.209.322.478l.448.894c.134.27.201.404.322.478c.121.075.271.075.572.075H17.5c.236 0 .354 0 .427-.073S18 14.736 18 14.5v-7c0-.236 0-.354-.073-.427S17.736 7 17.5 7h-4.882c-.3 0-.451 0-.572-.075c-.12-.074-.188-.209-.322-.478l-.448-.894c-.134-.27-.201-.404-.322-.478C10.833 5 10.683 5 10.382 5H6.5c-.236 0-.354 0-.427.073S6 5.264 6 5.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 13V5.5c0-.236 0-.354.073-.427S6.264 5 6.5 5h3.882c.3 0 .451 0 .572.075c.12.074.188.209.322.478l.448.894c.134.27.201.404.322.478c.121.075.271.075.572.075H17.5c.236 0 .354 0 .427.073S18 7.264 18 7.5v7c0 .236 0 .354-.073.427S17.736 15 17.5 15h-4.882c-.3 0-.451 0-.572-.075c-.12-.074-.188-.209-.322-.478l-.448-.894c-.134-.27-.201-.404-.322-.478c-.121-.075-.271-.075-.572-.075zm0 0v6"></svg:path></svg:g>`,
})
export class LetsIconsFlagFinishFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
