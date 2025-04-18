import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDatabaseServer1SolidIcon],svg[streamline-database-server-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5.407a1.5 1.5 0 0 0-1.5 1.5v2.925a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V1.907a1.5 1.5 0 0 0-1.5-1.5zM0 9.168a1.5 1.5 0 0 1 1.5-1.5h11a1.5 1.5 0 0 1 1.5 1.5v2.925a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5zM2.046 3.37a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0m0 7.261a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0m4.829-7.26c0-.346.28-.626.625-.626H11a.625.625 0 1 1 0 1.25H7.5a.625.625 0 0 1-.625-.625Zm.625 6.635a.625.625 0 1 0 0 1.25H11a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDatabaseServer1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
