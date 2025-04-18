import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDeleteTimeFilledIcon],svg[tdesign-delete-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3h9V1h-9zM22 6V4H2v2h2.029l.5 17h7.97A7.47 7.47 0 0 1 11 18.5V8h2v5.4a7.48 7.48 0 0 1 5.5-2.4q.676.001 1.32.116L19.972 6z"></svg:path><svg:path fill="currentColor" d="M13 18.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m7.914 1L19.5 18.086v-1.834h-2v2.662l2 2z"></svg:path>`,
})
export class TdesignDeleteTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
