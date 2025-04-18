import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHashtagIcon],svg[tdesign-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.604 2.117L10.006 7.5h4.988l.623-5.604l1.987.22l-.598 5.384H22v2h-5.216l-.556 5H22v2h-5.994l-.623 5.604l-1.987-.22l.598-5.384H9.006l-.623 5.604l-1.987-.22l.598-5.384H2v-2h5.216l.556-5H2v-2h5.994l.623-5.604zM9.784 9.5l-.556 5h4.988l.556-5z"></svg:path>`,
})
export class TdesignHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
