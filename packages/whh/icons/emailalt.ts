import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEmailaltIcon],svg[whh-emailalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.5 384L.5 125V64q0-27 19-45.5T64.5 0h896q26 0 45 18.5t19 45.5v61zm-32 64h64l480-249v505q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45V199z"></svg:path>`,
})
export class WhhEmailaltIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
