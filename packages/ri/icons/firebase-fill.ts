import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFirebaseFillIcon],svg[ri-firebase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.757 1.501L4 18.5L9.473 4.816L7.695 1.353a.5.5 0 0 0-.938.148m4.807 2.817L4 18.5l9.84-11.55l-1.399-2.623a.5.5 0 0 0-.877-.01m-.624 18.52L4 18.5L17.31 5.665a.5.5 0 0 1 .832.296L20 18.5l-6.94 4.337a2 2 0 0 1-2.12 0"></svg:path>`,
})
export class RiFirebaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
