import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMeetingCameraSolidIcon],svg[bubbles-meeting-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.167 3.666h10v8.667h-10zm15.508.384a.33.33 0 0 0-.324-.015l-4 2a.33.33 0 0 0-.184.298v3.334a.33.33 0 0 0 .184.298l4 2a.334.334 0 0 0 .482-.298V4.333a.33.33 0 0 0-.158-.284"></svg:path>`,
})
export class BubblesMeetingCameraSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
