import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChatBubbleLeft20SolidIcon],svg[heroicons-chat-bubble-left-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.43 2.524A41 41 0 0 1 10 2c2.236 0 4.43.18 6.57.524c1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41 41 0 0 1-5.183.501a.78.78 0 0 0-.528.224l-3.579 3.58A.75.75 0 0 1 6 17.25v-3.443a41 41 0 0 1-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsChatBubbleLeft20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
