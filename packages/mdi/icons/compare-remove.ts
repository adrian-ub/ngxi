import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCompareRemoveIcon],svg[mdi-compare-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-5V3h5c1.1 0 2 .9 2 2v8.4c-.6-.2-1.3-.4-2-.4zm-9-4h2v22h-2v-2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h5zm0 11l-5 6h5zm5.7 2L14 12v3.7c.4-.7 1-1.2 1.7-1.7m5.4 1.5L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiCompareRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
