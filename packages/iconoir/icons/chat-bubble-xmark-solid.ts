import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirChatBubbleXmarkSolidIcon],svg[iconoir-chat-bubble-xmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.856.471 3.605 1.3 5.13l-.787 4.233a.75.75 0 0 0 .874.874l4.233-.788A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25m-1.969 7.72a.75.75 0 0 0-1.062 1.06L10.934 12l-1.965 1.97a.75.75 0 1 0 1.062 1.06l1.963-1.97l1.976 1.971a.75.75 0 1 0 1.06-1.062L13.055 12l1.975-1.969a.75.75 0 1 0-1.06-1.062l-1.976 1.97z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirChatBubbleXmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
