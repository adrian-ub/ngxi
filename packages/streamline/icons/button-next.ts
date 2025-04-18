import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonNextIcon],svg[streamline-button-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5v13M.52 11.66a1 1 0 0 0 .52.88a1 1 0 0 0 1 0l7.19-4.7a1 1 0 0 0 0-1.68L2.02 1.5a1 1 0 0 0-1 0a1 1 0 0 0-.52.88z"></svg:path>`,
})
export class StreamlineButtonNextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
