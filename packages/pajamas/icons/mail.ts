import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasMailIcon],svg[pajamas-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3.5h12a.5.5 0 0 1 .5.5v.572L8 8.286L1.5 4.572V4a.5.5 0 0 1 .5-.5m-.5 2.8V12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V6.3L8.372 9.8L8 10.014L7.628 9.8zM0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasMailIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
