import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconToTopFilledIcon],svg[lsicon-to-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.979 2l3.875 3.875l-.707.707l-2.668-2.668V12.5H14v2H2v-2h5.479V3.914L4.81 6.582l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconToTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
