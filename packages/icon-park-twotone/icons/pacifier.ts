import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePacifierIcon],svg[icon-park-twotone-pacifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPacifier0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m30.656 21.586l4.103-4.104a6 6 0 1 0-4.243-4.243l-4.102 4.104"></svg:path><svg:path fill="#555" d="M41.263 32.192L15.807 6.736l-3.889 3.89l7.778 11.313l-2.828 4.243l4.596 4.596l4.243-2.828l11.667 8.131z"></svg:path><svg:path d="M19.32 21.885a10 10 0 0 0-9.877 2.529c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0a10 10 0 0 0 2.53-9.877"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPacifier0)"></svg:path>`,
})
export class IconParkTwotonePacifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
