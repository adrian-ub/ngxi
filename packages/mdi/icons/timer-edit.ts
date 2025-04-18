import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimerEditIcon],svg[mdi-timer-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H9V1h6zm4.39 7.74L11 19.13v2.81c-4.5-.5-8-4.31-8-8.94a9 9 0 0 1 9-9c2.12 0 4.07.74 5.62 2l1.42-1.44c.51.44.96.9 1.41 1.41l-1.42 1.42c.64.8 1.14 1.72 1.47 2.71c-.4.11-.79.32-1.11.64M13 7h-2v7h2zm0 12.96V22h2.04l6.13-6.12l-2.04-2.05zm9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiTimerEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
