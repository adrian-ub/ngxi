import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChimney1FilledIcon],svg[tdesign-chimney-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.719 2H13.28l-1.267 5.068L12.34 10H22v12h-6v-6h-2v6H1.926L2.99 7.088zm8.608 8l-.223-2H4.932l-.857 12H8V10zM4.28 4l.5 2h5.439l.5-2z"></svg:path>`,
})
export class TdesignChimney1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
