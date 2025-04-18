import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesNegativeIcon],svg[healthicons-test-tubes-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsTestTubesNegative0)"><svg:path d="M15 23v-2h-4v2z"></svg:path><svg:path d="M17 29v-8h3v8a4 4 0 0 0 8 0v-8h3v8a4 4 0 0 0 8 0v-8h2v13H7V21h2v8a4 4 0 0 0 8 0m5-10h4v-7h-4z"></svg:path><svg:path d="M33 26v-5h4v5zm0-7h4v-7h-4zm-22-7v7h4v-7z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm17 19h3v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2v7h3v-9h8v9h2v-3h2v3h1v2h-1v13h1v2h-1v2h-2v-2H7v2H5v-2H4v-2h1V21H4v-2h1v-3h2v3h2v-7a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTestTubesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTestTubesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
