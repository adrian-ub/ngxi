import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertCloudVideoSolidIcon],svg[streamline-insert-cloud-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.158 1.818A3.93 3.93 0 0 0 3.422 4.53l-.07.004a3.17 3.17 0 1 0 .016 6.33h.553V8.17c0-1.375 1.512-2.213 2.678-1.484l3.52 2.2c.708.442.959 1.266.751 1.979h.103l.03-.001a3.17 3.17 0 0 0-.108-6.334a3.93 3.93 0 0 0-3.737-2.712M9.68 10.47a.5.5 0 0 0-.225-.525l-3.519-2.2a.5.5 0 0 0-.765.425v4.4a.5.5 0 0 0 .765.423l3.52-2.2a.5.5 0 0 0 .224-.323" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInsertCloudVideoSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
