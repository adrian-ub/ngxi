import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity14FilledIcon],svg[tdesign-city-14-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.7 4.443l6.3-2.52l6.3 2.52l-.743 1.857L17 6.077V8h6v14H13v-7h-2v7H1V8h6V6.077l-.557.223zM3 20h4V10H3zm14-10v10h4V10zm-3.996-3.002H11v2.004h2.004z"></svg:path>`,
})
export class TdesignCity14FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
