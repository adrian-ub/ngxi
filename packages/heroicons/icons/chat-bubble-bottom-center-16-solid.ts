import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChatBubbleBottomCenter16SolidIcon],svg[heroicons-chat-bubble-bottom-center-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8.74c0 .983.713 1.825 1.69 1.943q1.357.163 2.737.243c.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556q1.38-.08 2.738-.243C14.287 10.565 15 9.723 15 8.74V4.259c0-.982-.713-1.824-1.69-1.942a44.5 44.5 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26z"></svg:path>`,
})
export class HeroiconsChatBubbleBottomCenter16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
