import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAwardTrophyNegativeIcon],svg[healthicons-award-trophy-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsAwardTrophyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM13 6a1 1 0 0 0-1 1v1H7a1 1 0 0 0-1 1v6a5 5 0 0 0 5 5h1.683A12.02 12.02 0 0 0 22 27.834V34h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6v-6.166A12.02 12.02 0 0 0 35.317 20H37a5 5 0 0 0 5-5V9a1 1 0 0 0-1-1h-5V7a1 1 0 0 0-1-1zm23 4v8h1a3 3 0 0 0 3-3v-5zM8 10h4v8h-1a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAwardTrophyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAwardTrophyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
