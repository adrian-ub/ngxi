import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1DropletIcon],svg[emojione-v1-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#57c6e9" d="M35.898 3.677C34.224-.55 29.041-2.087 24.72 5.419s-30.354 42.994.976 56.875c11.538 5.292 25.322-2.938 27.353-12.245c3.627-16.611-11.161-31.25-17.15-46.37"></svg:path><svg:ellipse cx="21.11" cy="51.53" fill="#e7e6e6" rx="4.296" ry="6.719" transform="rotate(159.298 21.114 51.532)"></svg:ellipse>`,
})
export class EmojioneV1DropletIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
