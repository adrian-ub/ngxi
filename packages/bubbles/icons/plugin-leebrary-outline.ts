import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginLeebraryOutlineIcon],svg[bubbles-plugin-leebrary-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 12.736s1.717-2.582 7.487-2.728a.5.5 0 0 1 .513.5v10.265a.5.5 0 0 1-.488.5C14.222 21.412 12.5 24 12.5 24zm0 0s-1.717-2.582-7.487-2.728a.5.5 0 0 0-.513.5v10.265a.5.5 0 0 0 .488.5C10.778 21.412 12.5 24 12.5 24M1.5 8.001l11-7l11 7m-6-6h3v2"></svg:path>`,
})
export class BubblesPluginLeebraryOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
