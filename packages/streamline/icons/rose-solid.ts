import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRoseSolidIcon],svg[streamline-rose-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.993 3.353a9.9 9.9 0 0 1 2.955-1.296a3.14 3.14 0 0 0-5.898.007a10.2 10.2 0 0 1 2.943 1.29Zm-5.185-.292a.3.3 0 0 0-.08.217v2.865A5.27 5.27 0 0 0 6.25 11.36v1.813a.75.75 0 0 0 1.5 0V11.36a5.27 5.27 0 0 0 2.874-1.39c-1.205-3-2.888-4.7-4.476-5.67A8.9 8.9 0 0 0 1.961 3a.19.19 0 0 0-.153.06Zm9.705 5.805a5.27 5.27 0 0 0 .758-2.723V3.337c0-.218-.16-.332-.291-.326a8.6 8.6 0 0 0-3.9 1.142c1.263 1.062 2.474 2.573 3.433 4.713" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRoseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
