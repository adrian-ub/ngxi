import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShrimpFilledIcon],svg[tdesign-shrimp-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 21v-6H9a4 4 0 0 0-4 4v2zm0-18H1v1.375c0 2.283 1.074 4.104 2.757 5.322C5.414 10.897 7.634 11.5 10 11.5h2.5zM8.002 4.998v2.004H5.998V4.998zm6.498 9.417v6.571c1.8-.1 3.468-.736 4.832-1.736zM22.946 13a8.9 8.9 0 0 1-2.14 4.895L15.913 13zm-2.142-6.886A9 9 0 0 1 22.944 11h-7.028zM14.5 9.587l4.838-4.835A8.9 8.9 0 0 0 14.5 3.013z"></svg:path>`,
})
export class TdesignShrimpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
