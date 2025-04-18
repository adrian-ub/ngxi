import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDumbbell1Icon],svg[lineicons-dumbbell-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 16.5a.75.75 0 0 1-.75.75H5.5A2.25 2.25 0 0 1 3.25 15v-2.25h-.5a.75.75 0 0 1 0-1.5h.5V9A2.25 2.25 0 0 1 5.5 6.75H7a.75.75 0 0 1 .75.75v3.75h8.5V7.5a.75.75 0 0 1 .75-.75h1.5A2.25 2.25 0 0 1 20.75 9v2.25h.5a.75.75 0 0 1 0 1.5h-.5V15a2.25 2.25 0 0 1-2.25 2.25H17a.75.75 0 0 1-.75-.75v-3.75h-8.5zM19.25 9a.75.75 0 0 0-.75-.75h-.75v7.5h.75a.75.75 0 0 0 .75-.75zm-14.5 6c0 .414.336.75.75.75h.75v-7.5H5.5a.75.75 0 0 0-.75.75z"></svg:path>`,
})
export class LineiconsDumbbell1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
