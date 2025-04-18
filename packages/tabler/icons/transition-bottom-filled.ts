import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTransitionBottomFilledIcon],svg[tabler-transition-bottom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17a1 1 0 0 1 1 1a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4a1 1 0 0 1 2 0a2 2 0 0 0 2 2h12a2 2 0 0 0 1.995-1.85L20 18a1 1 0 0 1 1-1m-9 1l-.082-.004l-.119-.016l-.111-.03l-.111-.044l-.098-.052l-.096-.067l-.09-.08l-3-3a1 1 0 0 1 1.414-1.414L11 14.586V10H6a4 4 0 1 1 0-8h12a4 4 0 1 1 0 8h-5v4.583l1.293-1.29a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3l-.112.097l-.11.071l-.062.031l-.081.034l-.076.024l-.149.03z"></svg:path>`,
})
export class TablerTransitionBottomFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
