import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginDebateOutlineIcon],svg[bubbles-plugin-debate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.223 19.818a2.288 2.288 0 1 0 0-4.576a2.288 2.288 0 0 0 0 4.576M1.79 23.25a4.2 4.2 0 0 1 3.433-1.716a4.2 4.2 0 0 1 3.432 1.716m10.122-3.432a2.288 2.288 0 1 0 0-4.576a2.288 2.288 0 0 0 0 4.576m-3.432 3.432a4.29 4.29 0 0 1 6.865 0m-1.44-20a1.5 1.5 0 0 0-1.5-1.5H4.175a1.5 1.5 0 0 0-1.5 1.5v6.517a1.5 1.5 0 0 0 1.506 1.5l6.042-.017l3.5 3v-3l5.54.017a1.5 1.5 0 0 0 1.507-1.5z"></svg:path>`,
})
export class BubblesPluginDebateOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
