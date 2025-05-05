import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasWorkItemsIcon],svg[pajamas-work-items-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2a2 2 0 0 1 2-2zM4 5.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2H7a2 2 0 0 1-2-2V5.5zm3-4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5zM10.75 3a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class PajamasWorkItemsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
