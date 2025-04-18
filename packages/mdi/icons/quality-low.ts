import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiQualityLowIcon],svg[mdi-quality-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 13.5h2v-3h-2M18 14c0 .6-.4 1-1 1h-.75v1.5h-1.5V15H14c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h3c.6 0 1 .4 1 1m1-6H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 9.5V15H6V9h1.5v4.5z"></svg:path>`,
})
export class MdiQualityLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
