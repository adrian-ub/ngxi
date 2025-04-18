import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCloudCheckSolidIcon],svg[streamline-cloud-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.883.115a4.37 4.37 0 0 0-4.582 2.717a3.693 3.693 0 0 0-.972 7.097a2 2 0 0 1 2.87-.5l.529.395L8.505 6.7a2 2 0 1 1 2.99 2.658l-.738.83h.019a3.23 3.23 0 0 0 .91-6.324A4.37 4.37 0 0 0 7.883.115m2.678 8.412a.75.75 0 0 0-1.122-.997l-3.541 3.984l-1.448-1.086a.75.75 0 0 0-.9 1.2l2 1.5a.75.75 0 0 0 1.01-.101l4-4.5Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCloudCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
