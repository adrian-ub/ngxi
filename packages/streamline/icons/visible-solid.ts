import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVisibleSolidIcon],svg[streamline-visible-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.933 3.491C4.056 2.681 5.456 2 7 2s2.944.682 4.067 1.491c1.128.812 2.02 1.784 2.56 2.437l.005.005c.241.3.368.681.368 1.067s-.127.766-.368 1.067l-.005.005c-.54.653-1.432 1.625-2.56 2.437C9.944 11.32 8.544 12 7 12s-2.944-.682-4.067-1.49C1.805 9.696.913 8.724.373 8.071l-.005-.005A1.7 1.7 0 0 1 0 7c0-.386.127-.766.368-1.067l.005-.005c.54-.653 1.432-1.625 2.56-2.437M7 9.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVisibleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
