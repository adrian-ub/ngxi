import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHotTubeIcon],svg[hugeicons-hot-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.664 16.986L3 13h18l-.664 3.986c-.4 2.395-.599 3.592-1.438 4.303c-.84.711-2.053.711-4.48.711H9.582c-2.428 0-3.642 0-4.48-.71c-.84-.712-1.04-1.91-1.439-4.304M18.6 10a1.45 1.45 0 0 0 0-2a1.45 1.45 0 0 1 0-2m-3.2 4a1.45 1.45 0 0 0 0-2a1.45 1.45 0 0 1 0-2M3 13H2m19 0h1"></svg:path><svg:path d="M5 13V9.851C5 8.83 5.829 8 6.851 8c1.329 0 2.556.712 3.215 1.866L13 15M9 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsHotTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
