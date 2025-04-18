import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStepForward2Icon],svg[mdi-step-forward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h3v14H7zm5 0l11 7l-11 7zM2 5h3v14H2z"></svg:path>`,
})
export class MdiStepForward2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
