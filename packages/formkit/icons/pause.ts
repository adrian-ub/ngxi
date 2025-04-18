import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitPauseIcon],svg[formkit-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.62 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5m6 0c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"></svg:path>`,
})
export class FormkitPauseIcon {
  readonly viewBox = input("0 0 9.12 16")
  readonly width = input("0.57em")
  readonly height = input("1em")
}
