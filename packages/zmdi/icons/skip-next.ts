import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSkipNextIcon],svg[zmdi-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320V64l181 128zM213 64h43v256h-43z"></svg:path>`,
})
export class ZmdiSkipNextIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
