import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSuperscript2Icon],svg[ri-superscript-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7v13H9V7H3V5h12v2zm8.55-.42a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 1 1 21 6c0 .573-.24 1.09-.626 1.454L18.744 9H21v1h-4V9z"></svg:path>`,
})
export class RiSuperscript2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
