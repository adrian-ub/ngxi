import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMaskIcon],svg[bx-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6H5C3.346 6 2 7.346 2 9v5c0 2.206 1.794 4 4 4h1.637c1.166 0 2.28-.557 2.981-1.491c.66-.879 2.104-.88 2.764.001A3.74 3.74 0 0 0 16.363 18H18c2.206 0 4-1.794 4-4V9c0-1.654-1.346-3-3-3m1 8c0 1.103-.897 2-2 2h-1.637c-.54 0-1.057-.259-1.382-.69c-.71-.948-1.797-1.492-2.981-1.492s-2.271.544-2.981 1.491A1.74 1.74 0 0 1 7.637 16H6c-1.103 0-2-.897-2-2V9c0-.551.448-1 1-1h14c.552 0 1 .449 1 1z"></svg:path><svg:ellipse cx="7.5" cy="11.5" fill="currentColor" rx="2.5" ry="1.5"></svg:ellipse><svg:ellipse cx="16.5" cy="11.5" fill="currentColor" rx="2.5" ry="1.5"></svg:ellipse>`,
})
export class BxMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
