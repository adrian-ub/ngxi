import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMoodTongueSolidIcon],svg[teenyicons-mood-tongue-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10.5V9h3v1.5a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M5 6H4V5h1zm6 0h-1V5h1zM4 9h1v1.5a2.5 2.5 0 0 0 5 0V9h1V8H4z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMoodTongueSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
