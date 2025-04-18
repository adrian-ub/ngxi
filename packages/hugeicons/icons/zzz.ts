import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsZzzIcon],svg[hugeicons-zzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.977 13.072h-7c-.29 0-.56-.17-.68-.44a.73.73 0 0 1 .12-.8l5.91-6.76h-5.35c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.29 0 .56.17.68.44s.08.58-.12.8l-5.91 6.76h5.35c.41 0 .75.34.75.75s-.34.75-.75.75m-1 8h-4a.74.74 0 0 1-.69-.46c-.12-.28-.05-.6.16-.82l2.72-2.72h-2.19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.3 0 .58.18.69.46c.12.28.05.6-.16.82l-2.72 2.72h2.19c.41 0 .75.34.75.75s-.34.75-.75.75m4-5h6c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.19l4.72-4.72c.21-.22.28-.54.16-.82a.74.74 0 0 0-.69-.46h-6c-.41 0-.75.34-.75.75s.34.75.75.75h4.19l-4.72 4.72c-.21.22-.28.54-.16.82c.11.28.39.46.69.46" color="currentColor"></svg:path>`,
})
export class HugeiconsZzzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
