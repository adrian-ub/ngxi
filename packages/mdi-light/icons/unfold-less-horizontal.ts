import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightUnfoldLessHorizontalIcon],svg[mdi-light-unfold-less-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.74 5.29L11.5 9.54L7.26 5.29l.7-.7l3.54 3.53l3.54-3.53zm0 14.42l-.7.7l-3.54-3.53l-3.54 3.53l-.7-.7l4.24-4.25z"></svg:path>`,
})
export class MdiLightUnfoldLessHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
