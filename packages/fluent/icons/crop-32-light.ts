import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop32LightIcon],svg[fluent-crop-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2.5a.5.5 0 0 0-1 0V7H2.5a.5.5 0 0 0 0 1H7v12.5a4.5 4.5 0 0 0 4.5 4.5H24v4.5a.5.5 0 0 0 1 0V25h4.5a.5.5 0 0 0 0-1h-18A3.5 3.5 0 0 1 8 20.5zM20.5 8h-11V7h11a4.5 4.5 0 0 1 4.5 4.5v11h-1v-11A3.5 3.5 0 0 0 20.5 8"></svg:path>`,
})
export class FluentCrop32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
