import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLactoseIcon],svg[healthicons-lactose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.592 22.776A3 3 0 0 1 19.584 20h8.833a3 3 0 0 1 2.991 2.776l1.35 18A3 3 0 0 1 29.767 44H18.234a3 3 0 0 1-2.992-3.224zm4.408.84a1 1 0 0 1 1 1v14.769a1 1 0 1 1-2 0v-14.77a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v14.769a1 1 0 0 0 2 0zM24 10a6 6 0 0 0-6 6v.857c0 .631.512 1.143 1.143 1.143h9.714c.631 0 1.143-.512 1.143-1.143V16a6 6 0 0 0-6-6m-3 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path d="M31 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class HealthiconsLactoseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
