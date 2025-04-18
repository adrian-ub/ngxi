import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsKnifeFork1Icon],svg[lineicons-knife-fork-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 5.75A3.75 3.75 0 0 1 8.25 2H9a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0v-6.5h-1.5A2.25 2.25 0 0 1 4.5 12.5zM8.25 3.5A2.25 2.25 0 0 0 6 5.75v6.75c0 .414.336.75.75.75h1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.5 2.75a.75.75 0 0 0-1.5 0v5a3.75 3.75 0 0 0 3 3.675v9.825a.75.75 0 0 0 1.5 0v-9.825a3.75 3.75 0 0 0 3-3.675v-5a.75.75 0 0 0-1.5 0v5a2.25 2.25 0 0 1-4.5 0z"></svg:path><svg:path fill="currentColor" d="M15.75 2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class LineiconsKnifeFork1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
