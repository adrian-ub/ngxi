import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiSmilingFaceWithTearIcon],svg[twemoji-smiling-face-with-tear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="18" fill="#FFCC4D"></svg:circle><svg:ellipse cx="12" cy="13.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse><svg:ellipse cx="24" cy="13.5" fill="#664500" rx="2.5" ry="3.5"></svg:ellipse><svg:path fill="#664500" d="M27.335 22.629a.5.5 0 0 0-.635-.029c-.039.029-3.922 2.9-8.7 2.9c-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 0 0-.729.657C8.7 23.472 11.788 28.5 18 28.5s9.301-5.028 9.429-5.243a.5.5 0 0 0-.094-.628"></svg:path><svg:path fill="#5DADEC" d="M29.5 27.5c0 2.762-2.238 5-5 5s-5-2.238-5-5s4-10 5-10s5 7.238 5 10"></svg:path>`,
})
export class TwemojiSmilingFaceWithTearIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
