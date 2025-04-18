import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowRedo2Icon],svg[proicons-arrow-redo-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.75 12l3.293-3.293A1 1 0 0 0 18.336 8M14.75 4l3.293 3.293a1 1 0 0 1 .293.707M16.75 19.5H10.5a5.75 5.75 0 0 1 0-11.5h7.836"></svg:path>`,
})
export class ProiconsArrowRedo2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
