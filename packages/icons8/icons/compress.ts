import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8CompressIcon],svg[icons8-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.28 2.28L19 11.595V3h-2v12h12v-2h-8.594l9.313-9.28l-1.44-1.44zM3 17v2h8.594L2.28 28.28l1.44 1.44L13 20.405V29h2V17z"></svg:path>`,
})
export class Icons8CompressIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
