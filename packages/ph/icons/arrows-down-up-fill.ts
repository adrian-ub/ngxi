import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsDownUpFillIcon],svg[ph-arrows-down-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M119.39 172.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 48 168h24V48a8 8 0 0 1 16 0v120h24a8 8 0 0 1 7.39 4.94m94.27-98.6l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 144 88h24v120a8 8 0 0 0 16 0V88h24a8 8 0 0 0 5.66-13.66"></svg:path>`,
})
export class PhArrowsDownUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
