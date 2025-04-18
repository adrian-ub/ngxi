import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveUpFilledIcon],svg[lsicon-move-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.979 2l3.875 3.875l-.707.707l-2.668-2.668V13H14v1H2v-1h5.479V3.914L4.81 6.582l-.707-.707zM6.5 10H2V9h4.5zm7.5 0H9.5V9H14z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMoveUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
