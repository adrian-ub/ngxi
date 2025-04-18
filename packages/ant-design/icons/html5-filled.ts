import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignHtml5FilledIcon],svg[ant-design-html5-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m145.2 96l66 746.6L512 928l299.6-85.4L878.9 96zm595 177.1l-4.8 47.2l-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3l-21.2 242.2l-1.7 16.2l-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2l102.4 27.7h.4l102-27.6l11.4-118.6H510.9v-.1H306l-22.8-253.5l-1.7-24.3h460.3z"></svg:path>`,
})
export class AntDesignHtml5FilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
