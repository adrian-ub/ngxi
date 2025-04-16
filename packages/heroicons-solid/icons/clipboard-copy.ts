import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidClipboardCopyIcon],svg[heroicons-solid-clipboard-copy-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 2a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z"></svg:path><svg:path d="M3 5a2 2 0 0 1 2-2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3a2 2 0 0 1 2 2v6h-4.586l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L10.414 13H15v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12 6h2a1 1 0 1 1 0 2h-2z"></svg:path></svg:g>`,
})
export class HeroiconsSolidClipboardCopyIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
