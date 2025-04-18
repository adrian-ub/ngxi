import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconScaleFilledIcon],svg[lsicon-scale-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM5 9a3 3 0 0 1 6 0h1a4 4 0 0 0-8 0zm1.426-1.44l1.713 1.786l.722-.692l-1.714-1.787z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScaleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
