import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDeleteTimeIcon],svg[tdesign-delete-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1h9v3H22v2h-2.029l-.163 5.529l-1.999-.059L17.97 6H6.03l.441 15H11.5v2H4.529l-.5-17H2V4h5.5zm2 3h5V3h-5zM13 8v7h-2V8zm5.5 7a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M13 18.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m6.5-2.248v1.834l1.414 1.414l-1.414 1.414l-2-2v-2.662z"></svg:path>`,
})
export class TdesignDeleteTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
