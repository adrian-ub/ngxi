import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feEjectIcon],svg[fe-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 16h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m5.973-9.565l4.83 6.048c.359.448.214 1.054-.324 1.353a1.34 1.34 0 0 1-.648.164H7.169C6.523 14 6 13.563 6 13.024c0-.193.068-.381.196-.541l4.831-6.048c.358-.449 1.084-.57 1.622-.271q.194.108.324.27"></svg:path>`,
})
export class FeEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
