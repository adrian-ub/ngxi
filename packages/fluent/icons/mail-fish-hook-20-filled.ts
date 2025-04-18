import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailFishHook20FilledIcon],svg[fluent-mail-fish-hook-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m2 1A2 2 0 0 1 14 5.937V8a2 2 0 1 0 4 0h-1.5a.5.5 0 0 1-.354-.854l2-2A.5.5 0 0 1 19 5.5V8a3 3 0 1 1-6 0V5.937A2 2 0 1 1 15.5 4m-5 0h-6a2.5 2.5 0 0 0-2.485 2.223L10 10.92l2.315-1.362A4 4 0 0 1 12 8V6.599A3 3 0 0 1 10.5 4m2.317 6.423A4 4 0 0 0 16 12c.729 0 1.412-.195 2-.535V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0z"></svg:path>`,
})
export class FluentMailFishHook20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
