import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightUnfoldMoreVerticalIcon],svg[mdi-light-unfold-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.17 16.74l-.71-.7L18 12.5l-3.54-3.54l.71-.7l4.24 4.24zm-7.34 0L3.59 12.5l4.24-4.24l.71.7L5 12.5l3.54 3.54z"></svg:path>`,
})
export class MdiLightUnfoldMoreVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
