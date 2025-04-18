import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epAvatarIcon],svg[ep-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.87 415.87 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0a208 208 0 0 1 416 0"></svg:path>`,
})
export class EpAvatarIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
