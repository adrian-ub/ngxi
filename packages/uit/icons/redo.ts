import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitRedoIcon],svg[uit-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 11.5a.5.5 0 0 0-.5.5a9.02 9.02 0 1 1-1.502-5H16.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.497A10 10 0 0 0 12.025 2C6.502 1.993 2.02 6.465 2.013 11.987S6.477 21.993 12 22c5.52-.006 9.994-4.48 10-10a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class UitRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
