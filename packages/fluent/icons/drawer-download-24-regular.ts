import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrawerDownload24RegularIcon],svg[fluent-drawer-download-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M11 6.5a5.5 5.5 0 0 1 5-5.478v5.77l-1.646-1.646a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L17 6.793v-5.77A5.5 5.5 0 1 1 11 6.5zm8.5 3A.5.5 0 0 0 19 9h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm1.5 1.69c-.444.427-.949.79-1.5 1.078V14h-4.558a.692.692 0 0 0-.692.692v.058a2.25 2.25 0 0 1-4.5 0v-.058A.692.692 0 0 0 9.058 14H4.5V9.5h6.232a6.457 6.457 0 0 1-.558-1.5H4.5v-.75c0-.966.784-1.75 1.75-1.75h3.826c.081-.523.224-1.026.422-1.5H6.25A3.25 3.25 0 0 0 3 7.25v11.5A3.25 3.25 0 0 0 6.25 22h11.5A3.25 3.25 0 0 0 21 18.75v-7.56zm-1.5 4.31v3.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5h3.825a3.751 3.751 0 0 0 7.35 0H19.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentDrawerDownload24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
