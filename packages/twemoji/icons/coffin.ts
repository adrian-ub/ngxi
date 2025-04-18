import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCoffinIcon],svg[twemoji-coffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C1694F" d="m31 12l-1.412 10.235L7.353 36L5 28z"></svg:path><svg:path fill="#662113" d="M1 22v7.647L7.353 36v-8z"></svg:path><svg:path fill="#A04E3C" d="M34 5v7.706l-4.412 9.529V15L31 9z"></svg:path><svg:path fill="#D99E82" d="m34 5l-4.412 9.824L7.353 28.588L1 22L17.941 2.118L28.529 0z"></svg:path><svg:path fill="#FFAC33" d="M12.001 30a1 1 0 0 1-.556-1.832l3-2a1 1 0 1 1 1.11 1.664l-3 2a1 1 0 0 1-.554.168m11-7a1 1 0 0 1-.556-1.832l3-2a1 1 0 0 1 1.11 1.664l-3 2a1 1 0 0 1-.554.168"></svg:path><svg:path fill="#C1694F" d="M9 25c-.258 0-.514-.1-.708-.293l-3-3a1 1 0 0 1-.022-1.391l15-16a1 1 0 0 1 .565-.302l6-1a1 1 0 0 1 .871.279l2 2a1 1 0 0 1 .223 1.079l-2 5a1 1 0 0 1-.343.439l-18 13A1 1 0 0 1 9 25m-1.608-4.022l1.713 1.713L26.18 10.359l1.646-4.119l-1.169-1.17l-5.159.86z"></svg:path>`,
})
export class TwemojiCoffinIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
