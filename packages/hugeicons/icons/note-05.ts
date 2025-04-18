import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNote05Icon],svg[hugeicons-note-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 2v2m-5-2v2M7 2v2m-3.5 9V9c0-2.828 0-4.243.879-5.121C5.257 3 6.672 3 9.5 3h5c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v4c0 2.828 0 4.243-.879 5.121C18.743 19 17.328 19 14.5 19h-5c-2.828 0-4.243 0-5.121-.879C3.5 17.243 3.5 15.828 3.5 13"></svg:path><svg:path d="M3.5 16V9c0-2.828 0-4.243.879-5.121C5.257 3 6.672 3 9.5 3h5c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v7c0 2.828 0 4.243-.879 5.121C18.743 22 17.328 22 14.5 22h-5c-2.828 0-4.243 0-5.121-.879C3.5 20.243 3.5 18.828 3.5 16M8 15h4m-4-5h8"></svg:path></svg:g>`,
})
export class HugeiconsNote05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
