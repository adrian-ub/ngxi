import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStepBackward2Icon],svg[mdi-step-backward-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5h-3v14h3zm-5 0L1 12l11 7zm10 0h-3v14h3z"></svg:path>`,
})
export class MdiStepBackward2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
