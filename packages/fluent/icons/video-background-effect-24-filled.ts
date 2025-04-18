import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoBackgroundEffect24FilledIcon],svg[fluent-video-background-effect-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16.938v2.121L5.059 20h-2.12zm16.002-2.503v2.122L18.56 20h-.566v-1.557zM8.75 14h6.495a1.75 1.75 0 0 1 1.744 1.607l.006.143V20H7v-4.25a1.75 1.75 0 0 1 1.606-1.744zm-.729-3.584c.06.579.243 1.12.523 1.6L2 18.56v-2.122zm13.98-.484v2.123l-4.007 4.01v-.315l-.004-.168a2.7 2.7 0 0 0-.387-1.247zM12.057 4L2 14.06v-2.121L9.936 4zm9.946 1.432v2.123l-5.667 5.67a2.7 2.7 0 0 0-.86-.216l-.23-.009h-.6a4 4 0 0 0 .855-1.062zM12 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6M7.559 4l-5.56 5.56V7.438L5.439 4zm13.497 0L15.91 9.149a4 4 0 0 0-.652-1.47L18.935 4zm-4.498 0l-2.543 2.544a4 4 0 0 0-1.6-.522L14.438 4z"></svg:path>`,
})
export class FluentVideoBackgroundEffect24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
