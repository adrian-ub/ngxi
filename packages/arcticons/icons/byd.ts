import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBydIcon],svg[arcticons-byd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.733 20.111V23c0 .554-.446 1-1 1H24v3.889m-1.5-3.89h-3.233c-.554 0-1-.445-1-1v-2.888m13.766 7.778l7.58-.006a3.886 3.886 0 0 0 0-7.772h-7.58m-27.533 0h9.522a1.945 1.945 0 0 1 0 3.889a1.945 1.945 0 0 1 0 3.889H4.5M14.022 24H4.5"></svg:path>`,
})
export class ArcticonsBydIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
