import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineContainerIcon],svg[streamline-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.75 11.5v-9H1.25v9zm.75-9H.5m13 9H.5M4 5v4m3-4v4m3-4v4"></svg:path>`,
})
export class StreamlineContainerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
