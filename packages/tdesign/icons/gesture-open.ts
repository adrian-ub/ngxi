import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureOpenIcon],svg[tdesign-gesture-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.036 4.987a.454.454 0 0 0-.74.495c.061.147.145.284.211.43l1.96 4.003l-2.158 4.654l3.643 1.115l1.002-5.974l.01-.038c.027-.111.035-.18.036-.22v-.014q0-.014-.002-.022a1.56 1.56 0 0 0-.445-.912zm2.582 12.686l-4.85-1.484H4v2.957h5.37zM4.28 14.19l1.972-4.25l-1.555-3.177c-.078-.172-.174-.335-.247-.51a2.454 2.454 0 0 1 4-2.68l3.518 3.518l.032.033l.032-.033l3.517-3.517a2.454 2.454 0 0 1 4 2.68c-.072.174-.168.337-.246.51l-1.555 3.175l1.972 4.251H22v6.957h-9.063L12 15.562l-.937 5.584H2V14.19zM13 9.451c0 .041.009.11.037.22l.01.04l1.001 5.973l3.644-1.115l-2.159-4.654l1.96-4.004c.066-.145.15-.282.211-.429a.454.454 0 0 0-.74-.495l-3.517 3.517a1.56 1.56 0 0 0-.447.934m6.231 6.75l-4.849 1.485l.247 1.473H20V16.19z"></svg:path>`,
})
export class TdesignGestureOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
