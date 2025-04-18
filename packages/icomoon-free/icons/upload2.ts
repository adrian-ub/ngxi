import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeUpload2Icon],svg[icomoon-free-upload2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14h16v1H0zm16-2v1H0v-1l2-4h4v2h4V8h4zM3.5 5L8 .5L12.5 5H9v4H7V5z"></svg:path>`,
})
export class IcomoonFreeUpload2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
