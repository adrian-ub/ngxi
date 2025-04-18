import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineController1SolidIcon],svg[streamline-controller-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.203 5.169L.784 8.94a2.305 2.305 0 0 0 4.353 1.286L5.5 9.5h3l.363.726a2.305 2.305 0 0 0 4.353-1.286l-.42-3.771A3 3 0 0 0 9.816 2.5h-5.63a3 3 0 0 0-2.982 2.669Zm3.172-.794c.345 0 .625.28.625.625v.542h.542a.625.625 0 1 1 0 1.25H5v.541a.625.625 0 1 1-1.25 0v-.541h-.542a.625.625 0 1 1 0-1.25h.542V5c0-.345.28-.625.625-.625m4.89 3.042a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25m1.876-2.175a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineController1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
