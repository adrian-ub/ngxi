import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCryAndLaughIcon],svg[tdesign-cry-and-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m5-3h4v2H9v2h6v-2h-1V9h4v2h-1v3h-.98l-.04.195C15.582 16.199 14.09 18 12 18s-3.581-1.802-3.98-3.805L7.98 14H7v-3H6zm4.445 6c.422.662 1.02 1 1.555 1s1.133-.338 1.555-1z"></svg:path>`,
})
export class TdesignCryAndLaughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
