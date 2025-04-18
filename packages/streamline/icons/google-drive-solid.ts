import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGoogleDriveSolidIcon],svg[streamline-google-drive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.154 1.92L.11 9.11l1.845 2.951l1.678-2.984L3.676 9l2.323-4.13zM7.54 4.508a1 1 0 0 0-.07-.112L5.456 1.173h4.079l4.209 7.482h-3.611zm-.635 1.813L5.59 8.655h2.773l-1.46-2.334Zm-2.158 3.835l-1.643 2.922h8.415l1.827-2.922z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGoogleDriveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
