import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRedo1Icon],svg[subway-redo-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M389.6 289.4c0 73.8-59.8 133.6-133.6 133.6c-73.7 0-133.6-59.8-133.6-133.6S182.2 155.8 256 155.8v66.8l113.9-111.3L256 0v66.8c-122.9 0-222.6 99.7-222.6 222.6S133.1 512 256 512s222.6-99.7 222.6-222.6z"></svg:path>`,
})
export class SubwayRedo1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
