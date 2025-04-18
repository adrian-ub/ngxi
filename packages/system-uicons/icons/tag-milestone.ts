import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsTagMilestoneIcon],svg[system-uicons-tag-milestone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.224V15.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.224a2 2 0 0 0-.464-1.28l-3.768-4.522a1 1 0 0 0-1.536 0L5.964 7.944a2 2 0 0 0-.464 1.28"></svg:path>`,
})
export class SystemUiconsTagMilestoneIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
