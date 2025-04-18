import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitTextareaIcon],svg[formkit-textarea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2h-10v4.5h-1V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v4.5h-1zm-10 12h10V9.5h1V14c0 .55-.45 1-1 1h-10c-.55 0-1-.45-1-1V9.5h1z"></svg:path><svg:path fill="currentColor" d="M10.5 5h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path><svg:path fill="currentColor" d="M7.5 12c-.28 0-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5v7c0 .28-.22.5-.5.5M2 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m0-3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m11 3c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m0-3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class FormkitTextareaIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
