import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feVideoIcon],svg[fe-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15 9.649l5.646-2.137A1 1 0 0 1 22 8.448v7.109a1 1 0 0 1-1.351.936L15 14.375V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2z"></svg:path>`,
})
export class FeVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
