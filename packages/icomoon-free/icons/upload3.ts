import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeUpload3Icon],svg[icomoon-free-upload3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 11H0v4h15v-4zm6.5 2h-2v-1h2zM3.5 5l4-4l4 4H9v5H6V5z"></svg:path>`,
})
export class IcomoonFreeUpload3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
