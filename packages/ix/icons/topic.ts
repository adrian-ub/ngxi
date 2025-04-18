import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTopicIcon],svg[ix-topic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 85.333v341.333H128L21.333 256L128 85.333zM426.666 128h-275.05l-80 128l80 128h275.05zm-150.413 21.333l-9.14 60.372h33.9l9.14-60.372h32.572l-9.14 60.372h29.081v26.949H329.43l-5.982 39.595h28.749v26.949h-32.904l-8.973 59.468h-32.572l8.974-59.468h-33.9l-8.974 59.468h-32.571l8.973-59.468H192v-26.949h32.405l5.982-39.595H202.47v-26.95h32.073l9.14-60.371zm22.413 85.333H262.4l-6.4 42.667h36.266z"></svg:path>`,
})
export class IxTopicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
