import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionMergeFilledIcon],svg[carbon-direction-merge-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M17.878 15.465l2.658 2.656A4.97 4.97 0 0 1 22 21.657V26h-2v-4.343a2.98 2.98 0 0 0-.878-2.122l-2.658-2.656a5 5 0 0 1-.464-.566a5 5 0 0 1-.464.566l-2.658 2.657a2.98 2.98 0 0 0-.878 2.12V26h-2v-4.343a4.97 4.97 0 0 1 1.464-3.536l2.658-2.657a2.98 2.98 0 0 0 .878-2.12V8.827l-4.586 4.586L9 12l7-7l7 7l-1.414 1.414L17 8.828v4.515a2.98 2.98 0 0 0 .878 2.122"></svg:path><svg:path fill="none" d="m17.878 15.465l2.658 2.656A4.97 4.97 0 0 1 22 21.657V26h-2v-4.343a2.98 2.98 0 0 0-.878-2.122l-2.658-2.656a5 5 0 0 1-.464-.566a5 5 0 0 1-.464.566l-2.658 2.657a2.98 2.98 0 0 0-.878 2.12V26h-2v-4.343a4.97 4.97 0 0 1 1.464-3.536l2.658-2.657a2.98 2.98 0 0 0 .878-2.12V8.827l-4.586 4.586L9 12l7-7l7 7l-1.414 1.414L17 8.828v4.515a2.98 2.98 0 0 0 .878 2.122"></svg:path>`,
})
export class CarbonDirectionMergeFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
