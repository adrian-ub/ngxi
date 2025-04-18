import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCleaningRoom2Icon],svg[guidance-cleaning-room-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 7.5a4 4 0 0 1 4-4h1v-3h-11v3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2v10h11v-7l-.145-.087C14 14 12.5 11.5 12.5 7.5Zm0 0h-4m7-3.874V5A2.5 2.5 0 0 0 18 7.5M20.5 0v4"></svg:path>`,
})
export class GuidanceCleaningRoom2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
