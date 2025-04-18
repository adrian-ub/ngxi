import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMonsterIcon],svg[hugeicons-monster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 11.5h.009m4.491 0c0 1.933-2.015 3.5-4.5 3.5s-4.5-1.567-4.5-3.5S9.515 8 12 8s4.5 1.567 4.5 3.5M14 18c-.515.31-1.221.5-2 .5s-1.485-.19-2-.5"></svg:path><svg:path d="M12 4a8.5 8.5 0 0 0-6.521 13.953c.59.705 1.021 1.559 1.021 2.479c0 .866.702 1.568 1.568 1.568h7.864c.866 0 1.568-.702 1.568-1.568c0-.92.43-1.774 1.021-2.48A8.5 8.5 0 0 0 12 4"></svg:path><svg:path d="M16 5c.167-.9 1-2.76 3-3M8 5c-.167-.9-1-2.76-3-3"></svg:path></svg:g>`,
})
export class HugeiconsMonsterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
