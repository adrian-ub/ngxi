import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePencil2Icon],svg[icomoon-free-pencil2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 10l2-1l7-7l-1-1l-7 7zm-1.48 3.548c-.494-1.043-1.026-1.574-2.069-2.069l1.548-4.262l2-1.217l6-6h-3l-6 6l-3 10l10-3l6-6V4l-6 6l-1.217 2z"></svg:path>`,
})
export class IcomoonFreePencil2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
