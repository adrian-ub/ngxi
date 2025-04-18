import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSimplybuiltIcon],svg[la-simplybuilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h20c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2h-4c-1.094 0-2 .906-2 2v1h-8V9c0-1.094-.906-2-2-2zm0 2h4v3h12V9h4v14H6zm6 5.5a3 3 0 1 0 .002 6.002A3 3 0 0 0 12 14.5m8 0a3 3 0 1 0 .002 6.002A3 3 0 0 0 20 14.5"></svg:path>`,
})
export class LaSimplybuiltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
