import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIconChanger2Icon],svg[arcticons-icon-changer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5h14.379c2.216 0 4-1.784 4-4L42.5 24c0-10.217-8.283-18.5-18.5-18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.5 14a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5c-5.493 0-10-4.507-10-10s4.507-10 10-10"></svg:path>`,
})
export class ArcticonsIconChanger2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
