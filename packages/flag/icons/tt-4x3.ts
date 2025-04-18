import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTt4x3Icon],svg[flag-tt-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#e00000" fill-rule="evenodd" d="M463.7 480L0 1v478.8zM176.3 0L640 479V.2z"></svg:path><svg:path fill="#000001" fill-rule="evenodd" d="M27.7.2h118.6l468.2 479.3H492.2z"></svg:path>`,
})
export class FlagTt4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
