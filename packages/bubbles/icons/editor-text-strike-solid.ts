import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorTextStrikeSolidIcon],svg[bubbles-editor-text-strike-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.132 0c.783 0 1.558.145 2.281.428a6 6 0 0 1 1.941 1.23a5.6 5.6 0 0 1 1.294 1.86c.296.7.439 1.45.419 2.204a1 1 0 0 1-1.996.064l-.003-.117a3.3 3.3 0 0 0-.262-1.372a3.6 3.6 0 0 0-.83-1.19a4 4 0 0 0-1.291-.816A4.3 4.3 0 0 0 8.133 2c-.816 0-1.601.273-2.21.764a2.96 2.96 0 0 0-1.088 1.843c-.108.704.06 1.421.48 2.026c.388.562.97.993 1.655 1.225l.208.064l3.35.907c.501.136.978.33 1.42.577L19 9.407a1 1 0 0 1 .117 1.993l-.117.007h-4.929l.01.015a5.42 5.42 0 0 1 .77 3.697c-.21 1.37-.942 2.616-2.055 3.512A6.3 6.3 0 0 1 8.855 20c-1.814 0-3.558-.67-4.85-1.872c-1.308-1.214-2.047-2.872-2.047-4.606a1 1 0 1 1 2 0c0 1.172.503 2.3 1.408 3.14C6.284 17.518 7.54 18 8.855 18a4.3 4.3 0 0 0 2.687-.927c.728-.586 1.199-1.388 1.332-2.258a3.43 3.43 0 0 0-.59-2.487a3.9 3.9 0 0 0-.912-.922L1 11.407a1 1 0 0 1-.117-1.993L1 9.407l4.529.002a5.2 5.2 0 0 1-1.86-1.637a4.8 4.8 0 0 1-.81-3.47a4.95 4.95 0 0 1 1.81-3.095A5.53 5.53 0 0 1 8.132 0"></svg:path>`,
})
export class BubblesEditorTextStrikeSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
