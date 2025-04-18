import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCodeCircle2FilledIcon],svg[tabler-code-circle-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-3.658 5.22a1 1 0 0 0-1.282.598l-2 5.5a1 1 0 0 0 1.88.684l2-5.5a1 1 0 0 0-.598-1.282M9.207 9.793a1 1 0 0 0-1.414 0l-1.5 1.5a1 1 0 0 0 0 1.414l1.5 1.5a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L8.415 12l.792-.793a1 1 0 0 0 0-1.414m7 0a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32l.792.793l-.792.793a1 1 0 0 0 1.414 1.414l1.5-1.5a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class TablerCodeCircle2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
