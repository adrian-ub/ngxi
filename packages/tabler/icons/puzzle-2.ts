import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPuzzle2Icon],svg[tabler-puzzle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path d="M12 4v2.5a.5.5 0 0 1-.5.5a1.5 1.5 0 0 0 0 3a.5.5 0 0 1 .5.5V12m0 0v1.5a.5.5 0 0 0 .5.5a1.5 1.5 0 0 1 0 3a.5.5 0 0 0-.5.5V20m8-8h-2.5a.5.5 0 0 1-.5-.5a1.5 1.5 0 0 0-3 0a.5.5 0 0 1-.5.5H12m0 0h-1.5a.5.5 0 0 0-.5.5a1.5 1.5 0 0 1-3 0a.5.5 0 0 0-.5-.5H4"></svg:path></svg:g>`,
})
export class TablerPuzzle2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
