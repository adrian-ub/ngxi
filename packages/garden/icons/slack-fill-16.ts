import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSlackFill16Icon],svg[garden-slack-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.913 0a1.739 1.739 0 1 0 0 3.478h1.74V1.74A1.743 1.743 0 0 0 5.912 0zm4.174 0c-.96 0-1.74.778-1.74 1.74v4.173a1.739 1.739 0 1 0 3.48 0V1.739c0-.96-.78-1.739-1.74-1.739M1.739 4.174a1.739 1.739 0 1 0 0 3.478h4.174a1.739 1.739 0 1 0 0-3.478zm12.522 0c-.96 0-1.74.778-1.74 1.739v1.74h1.74a1.739 1.739 0 1 0 0-3.48zM1.739 8.348a1.739 1.739 0 1 0 1.74 1.739v-1.74zm4.174 0c-.96 0-1.74.778-1.74 1.739v4.174a1.739 1.739 0 1 0 3.48 0v-4.174c0-.96-.78-1.74-1.74-1.74zm4.174 0a1.739 1.739 0 1 0 0 3.478h4.174a1.739 1.739 0 1 0 0-3.478zm-1.74 4.174v1.739a1.739 1.739 0 1 0 1.74-1.74z"></svg:path>`,
})
export class GardenSlackFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
