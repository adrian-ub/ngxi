import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBroadcastIcon],svg[bx-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.707 4.293l-1.414 1.414c2.733 2.733 2.733 7.353 0 10.086l1.414 1.414c3.5-3.5 3.5-9.414 0-12.914m-4.414 4.414c.566.566.879 1.292.879 2.043s-.313 1.477-.879 2.043l1.414 1.414c.944-.943 1.465-2.172 1.465-3.457s-.521-2.514-1.465-3.457zm-9.086-3L4.793 4.293c-3.5 3.5-3.5 9.414 0 12.914l1.414-1.414c-2.733-2.733-2.733-7.353 0-10.086"></svg:path><svg:path fill="currentColor" d="M7.293 7.293c-.944.943-1.465 2.172-1.465 3.457s.521 2.514 1.465 3.457l1.414-1.414c-.566-.566-.879-1.292-.879-2.043s.313-1.477.879-2.043zM14 10.5a2 2 0 0 0-4 0a2 2 0 0 0 .895 1.666L10.002 22h3.996l-.893-9.835c.54-.358.895-.97.895-1.665"></svg:path>`,
})
export class BxBroadcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
