import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRepeatOnceIcon],svg[mdi-repeat-once-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15V9h-1l-2 1v1h1.5v4m5.5 2H7v-3l-4 4l4 4v-3h12v-6h-2M7 7h10v3l4-4l-4-4v3H5v6h2z"></svg:path>`,
})
export class MdiRepeatOnceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
