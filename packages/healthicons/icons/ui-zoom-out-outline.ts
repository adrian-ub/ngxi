import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiZoomOutOutlineIcon],svg[healthicons-ui-zoom-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M33 22H21v-2h12z"></svg:path><svg:path fill-rule="evenodd" d="M42 21c0 8.284-6.716 15-15 15c-3.782 0-7.238-1.4-9.876-3.71l-1.828 1.828l.004 2.825l-6.472 6.471l-4.242-4.242l6.524-6.524l2.707.12l1.893-1.892A14.94 14.94 0 0 1 12 21c0-8.284 6.716-15 15-15s15 6.716 15 15m-2 0c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13M8.828 40.586l-1.414-1.414l4.486-4.487l1.397.063l.002 1.367z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsUiZoomOutOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
