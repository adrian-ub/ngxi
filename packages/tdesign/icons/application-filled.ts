import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignApplicationFilledIcon],svg[tdesign-application-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.66 6.423v11.154L12 23.155l-9.66-5.578V6.423L12 .845zM12 10.798L8.723 8.613l-1.11 1.664L11 12.535V16h2v-3.465l3.387-2.258l-1.11-1.664z"></svg:path>`,
})
export class TdesignApplicationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
