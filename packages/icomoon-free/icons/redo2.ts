import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeRedo2Icon],svg[icomoon-free-redo2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3.881V0l6 6l-6 6V8.034C2.02 7.87 2.319 12.781 4.096 16C-.29 11.259.641 3.663 9 3.881"></svg:path>`,
})
export class IcomoonFreeRedo2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
