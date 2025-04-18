import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightUnfoldLessVerticalIcon],svg[mdi-light-unfold-less-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.71 16.74l-4.25-4.24l4.25-4.24l.7.7l-3.53 3.54l3.53 3.54zm-14.42 0l-.7-.7l3.53-3.54l-3.53-3.54l.7-.7l4.25 4.24z"></svg:path>`,
})
export class MdiLightUnfoldLessVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
