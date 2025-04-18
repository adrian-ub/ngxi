import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCompass2Icon],svg[icomoon-free-compass2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1.5 8a6.5 6.5 0 0 1 10.93-4.756L6 6l-2.756 6.43A6.48 6.48 0 0 1 1.5 8m7.643 1.143l-4.001 1.715l1.715-4.001zM8 14.5a6.48 6.48 0 0 1-4.43-1.744L10 10l2.756-6.43A6.5 6.5 0 0 1 8 14.5"></svg:path>`,
})
export class IcomoonFreeCompass2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
