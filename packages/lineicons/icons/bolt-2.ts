import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBolt2Icon],svg[lineicons-bolt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.677 3.093A.75.75 0 0 1 7.41 2.5h7.28a.75.75 0 0 1 .678 1.069l-2.18 4.646h5.652a.75.75 0 0 1 .635 1.149l-8.029 12.785a.75.75 0 0 1-1.382-.464l.62-7.15H5.16a.75.75 0 0 1-.733-.906zM8.017 4l-1.93 9.035h5.415a.75.75 0 0 1 .747.815l-.423 4.873l5.657-9.008h-5.476a.75.75 0 0 1-.679-1.069L13.508 4z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBolt2Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
